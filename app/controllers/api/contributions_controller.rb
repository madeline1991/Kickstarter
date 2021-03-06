class Api::ContributionsController < ApplicationController

  def index
    @contributions = Contribution.select("SUM(amount) as total_contributions",
    "COUNT(*) as total_contributers")
    .where("project_id = #{params[:project_id]}")

    render 'api/contributions/index.json.jbuilder'
  end

  def create
    @contribution = Contribution.create(contribution_params)
    
    if @contribution.save
      render json: "#{@contribution.amount}"
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  private
  def contribution_params
    params.require(:contribution).permit(:id, :amount, :name, :reward_id, :email_address, :project_id)
  end
end
