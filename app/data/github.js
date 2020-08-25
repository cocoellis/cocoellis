import dayjs from 'dayjs';

/* Keys returned by the github api. The other keys in the array below
 * are mostly jokes. These are the keys the github api query searches for.
 */
export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
];

// TODO To be provided by an API
const data = [
{
    label: 'Last updated',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/cocoellis/cocoellis/commits',
  },
  { /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '3725',
    link: 'https://github.com/cocoellis/cocoellis/graphs/contributors',
  },
];

export default data;
