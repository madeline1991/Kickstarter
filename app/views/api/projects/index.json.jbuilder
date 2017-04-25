# @projects.each do |path|
#   json.set! path.id do
#     json.project_id project.id
#     json.title project.title
#     json.funding project.funding
#     json.owner project.owner
#     json.description project.description
#     json.image_url asset_path(project.image.url)
#     json.location project.location
#   end

json.array! @projects do |project|
  json.project_id project.id
  json.title project.title
  json.funding project.funding
  json.start_date project.launch_date
  json.duration project.duration
  json.goal project.goal
  json.owner project.owner
  json.description project.description
  json.image_url asset_path(project.image.url)
  json.location project.location
end
