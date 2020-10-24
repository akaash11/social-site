const { gql } = require('apollo-server');
const { model } = require('../models/Post');

module.exports = gql`
	type Post {
		id: ID!
		body: String!
		username: String!
		createdAt: String!
	}
	type Query {
		getPosts: [Post]
	}
`;
