const days = 24 * 60 * 60 * 1000;
const hours = 60 * 60 * 1000;
const minutes = 60 * 1000;
const seconds = 1000;

$httpAPI(
  'GET', '/v1/traffic', null,
  ({ startTime }) => {
    let diffTime = new Date().getTime() - startTime * seconds;
    let diffHours = diffTime % days;
    let diffMinutes = diffHours % hours;
    let diffSeconds = diffMinutes % minutes;
    $done({
      title: "Surge启动时长",
      content: !!startTime ? [
        `${Math.floor(diffTime / days)}天`,
        `${Math.floor(diffHours / hours)}小时`,
        `${Math.floor(diffMinutes / minutes)}分钟`,
        `${Math.floor(diffSeconds / seconds)}秒`,
      ].join('') : '未启动',
      icon: 'externaldrive.connected.to.line.below',
    });
  }
);
