$httpClient.get(
  'http://ip-api.com/json',
  (err, { status }, data) => {
    let content = err?.message ?? `${err}`;
    if (status === 200 && !!data) {
      const {
        country, countryCode,
        region, regionName,
        city, zip, timezone,
        isp, as, query
      } = JSON.parse(data);
      content = [
        `ASN：${as}`,
        `ISP：${isp}`,
        `IP：${query} - ${countryCode}`,
        `国家：${country}`,
        `地区：${regionName}`,
        `城市：${city}`,
        `邮编：${region} ${zip ?? '000000'}`,
        `时区：${timezone}`
      ].join('\n');
    };
    $done({
      title: 'GeoIP信息',
      content,
      icon: 'network'
    });
  }
);
