const Comment = require("../models/comment");

class CommentService {

    // Add comment
    async addComment(data){
        return await Comment.create(data);
    }

    // Get all comment
    async getComments(id){
        return await Comment.find({"postId": id}).populate("userId").sort({createdAt: -1})
    }

    // Update comment
    async updateComment(id, data){
        return await Comment.findByIdAndUpdate(id, data)
    }
}

module.exports = new CommentService();