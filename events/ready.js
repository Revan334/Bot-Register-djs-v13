function users(num) {
  const formatter = new Intl.NumberFormat('en');
  const result = formatter.format(num);
  return result;
}

const { STATUS, !REGISTER NAMA_KAMU } = require('../util/config.json');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`${client.user.tag} Bot Sudah Online`);

    const status = `${STATUS}` || `${users(client.users.cache.size)} members!`;
    const type = `${!REGISTER NAMA_KAMU}` || 'PLAYING';
    client.user.setActivity(status, {
      type: `${type}`,
    });
  },
};
