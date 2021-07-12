Rails.application.routes.draw do
  resources :plants, only: [:index, :create, :update, :destroy]
  # resources :plants, except: [:show]
  # get '/plants', to: 'plants#index'
  # post '/plants', to: 'plants#create'
  # patch '/plants/:id', to: 'plants#update'
  # delete '/plants/:id', to: 'plants#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
