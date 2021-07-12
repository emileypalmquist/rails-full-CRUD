class PlantsController < ApplicationController
  before_action :find_plant, only: [:update, :destroy]

  def index
    plants = Plant.all
    render json: plants
  end

  def create
    # plant = Plant.create(plant_params)
    # if plant.valid?
    plant = Plant.new(plant_params)
    if plant.save
      render json: plant
    else
      render json: {message: 'something went wrong'}, status: :created
    end
  end

  def update
    # plant = Plant.find(params[:id])
    if @plant.update(plant_params)
      render json: @plant, status: :ok
    else
      render json: {message: 'something went wrong'}
    end
    # plant.update(name: params[:plant][:name], image: params[:plant][:image], content: params[:plant][:content])
  end

  def destroy
    # plant = Plant.find(params[:id])
    if @plant.destroy
      render json: {message: 'successfully deleted plant'}, status: :accepted
    else
      render json: {message: 'something went wrong'}
    end
  end

  private

  def plant_params
    params.require(:plant).permit(:name, :image, :content)
  end

  def find_plant
    @plant = Plant.find(params[:id])
  end
end
