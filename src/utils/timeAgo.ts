import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const timeAgo = (timestamp: string): string => {
  return dayjs().to(dayjs(timestamp));
};

export default timeAgo;
