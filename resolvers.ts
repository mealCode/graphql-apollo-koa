const resolvers = {
    Query: {
        allCourses: (parent, args, { db }, info) => {
            return db;
        },
        course: (parent, { id }, { db }, info) => {
            return db.filter(course => {
                return course.id === id;
            })[0];
        }
    }
}

export { resolvers as default };