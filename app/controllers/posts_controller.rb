class PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @posts = Post.all
    render json: @posts
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {status: "deleted"}
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
