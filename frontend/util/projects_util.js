export const getProject = (id, pageType) => {
  return $.ajax({
    type: "GET",
    url: `api/projects/${id}`,
    data: { pageType }
  });
};

export const createProject = (project) => {
  return $.ajax({
    type: "POST",
    url: 'api/projects',
    data: { project },
  });
};

export const updateProject = (project) => {
  return $.ajax({
    type: "PATCH",
    url: `api/projects/${project.id}`,
    contentType: false,
    processData: false,
    data: project
  });
};

export const launchProject = (project) => {
  return $.ajax({
    type: "PATCH",
    url: `api/projects/${project.id}`,
    data: { project },
  });
}

export const fetchStory = (project_id) => {
  return $.ajax({
    type: "GET",
    url: `api/stories/${project_id}`,
    data: { project_id }
  });
};

export const createStory = (story) => {
  return $.ajax({
    type: "POST",
    url: 'api/stories',
    data: { story }
  });
};

export const updateStory = (story) => {
  return $.ajax({
    type: "PATCH",
    url: `api/stories/${story.id}`,
    data: { story }
  });
};

export const fetchRewards = (project_id) => {
  return $.ajax({
    type: "GET",
    url: `api/rewards`,
    data: {project_id}
  });
};

export const createReward = (reward) => {
  return $.ajax({
    type: "POST",
    url: 'api/rewards',
    data: { reward }
  });
};

export const updateReward = (reward) => {
  return $.ajax({
    type: "PATCH",
    url: `api/rewards/${reward.id}`,
    data: { reward }
  });
};

export const fetchAlmostFunded = (fetchType) => {
  return $.ajax({
    type: "GET",
    url: 'api/projects',
    data: {fetchType}
  });
};

export const fetchContributions = (project_id) => {
  return $.ajax({
    type: "GET",
    url: 'api/contributions',
    data: {project_id}
  });
}
