class RootController < ApplicationController
  def index; end

  def greeting
    render json: { text: Greeting.all.sample.text }
  end
end
