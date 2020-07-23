const moment = require('moment');
module.exports = {
    '@vuepress/last-updated':
    {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale("zh-cn")
            return moment(timestamp).format("LLL")
        }
    }
}