const log4js = require('log4js');

// アペンダ・ロガーの定義
log4js.configure({
  // アペンダ定義
  appenders: {
    // 標準出力アペンダ
    stdout: {
      type: 'stdout'
    }
  },
  // ロガー定義 : コレが getLogger() の引数で指定する名称になる
  categories: {
    // 'default' は getLogger() の第1引数未指定時にも使用される
    default: {
      appenders: ['stdout'],
      level: 'trace'  // 出力する最低レベルを指定する
    }
  }
});

// ロガーを取得し使用する
const logger = log4js.getLogger('default');  // log4js.getLogger(); でも同じ

// こんな感じ
logger.trace('Trace レベル');
logger.debug('Debug レベル');
logger.info('Info レベル');
logger.warn('Warn レベル');
logger.error('Error レベル');
logger.fatal('Fatal レベル');
