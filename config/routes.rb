Rails.application.routes.draw do
  root to: 'pages#home'
  match "*path", to: "pages#home", format: false, via: :get
end
