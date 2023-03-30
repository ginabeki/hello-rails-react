Rails.application.routes.draw do
  root 'root#index'

  get '/api/greetings', to: 'root#greeting'
end
