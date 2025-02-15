// Description:
//   TODO を管理できるボットです
// Commands:
//   ボット名 add      - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');
module.exports = robot => {
  robot.respond(/add (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.add(task);
    msg.send('追加しました: ' + task);
  });
  robot.respond(/done (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send('完了にしました: ' + task);
  });
  robot.respond(/del (.+)/i, msg => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send('削除しました: ' + task);
  });
  robot.respond(/list/i, msg => {
    const todoList = todo.list();
    if (todoList.length === 0) {
      msg.send("(TODOはありません)");
    }
    msg.send(todoList.join('\n'));
  });
  robot.respond(/donelist/i, msg => {
    const todoDoneList = todo.donelist();
    if (todoDoneList.length === 0) {
      msg.send("(完了したTODOはありません)");
    }
    msg.send(todoDoneList.join('\n'));
  });
};
