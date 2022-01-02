import allVideoData from "./allVideoData.json";

export const getAllVideos = () => {
  return allVideoData;
};

export const getSomeVideos = (numVideos) => {
  const allVideos = getAllVideos();
  return allVideos.sort(() => 0.5 - Math.random()).slice(0, numVideos);
};

export const getVideosByTopic = (topic, numVideos) => {
  const allMatchingVideos = getAllVideos().filter(
    (videoItem) =>
      videoItem.title.toLowerCase().includes(topic.toLowerCase()) ||
      videoItem.description.toLowerCase().includes(topic.toLowerCase())
  );
  if (allMatchingVideos.length === 0) {
    return getAllVideos();
  }
  const resultsArr = [];
  for (let i = 0; i < numVideos; i++) {
    resultsArr.push(
      allMatchingVideos[Math.floor(Math.random() * allMatchingVideos.length)]
    );
  }
  return resultsArr;
};
