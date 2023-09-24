const { groups, decisions } = $surge.selectGroupDetails();
const group = decisions['Proxy'];
const proxy = decisions[group];
if (groups[group].length > 1) {
  const one = groups[group].find(p => {
    const srv = new Date().getHours() < 6 ? 'SPEEDCAT' : 'SSRDOG';
    if (new RegExp(srv).test(p)) return p;
  });
  $surge.setSelectGroupPolicy(group, one) && $notification.post(
    '策略组已改变', group, `${proxy} -> ${one}`
  );
};
$done();
