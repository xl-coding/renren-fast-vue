const debug = true;


export function dataSysLogin() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysLogList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysOssList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}


export function dataSysConfigList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysScheduleList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysRoleList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysUserList() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysUserInfo() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

export function dataSysLogout() {
  if (!debug) {
    return '';
  }
  return {
    user: {
      userId: 'userid',
      username: 'test名字'
    }
  }
}

/**
 *
 */
export function dataSysMenuNav() {
  if (!debug) {
    return ''
  }

  return {
    'msg': 'success',
    'menuList': [{
      'menuId': 1,
      'parentId': 0,
      'parentName': null,
      'name': '系统管理',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'system',
      'orderNum': 0,
      'open': null,
      'list': [{
        'menuId': 2,
        'parentId': 1,
        'parentName': null,
        'name': '管理员列表',
        'url': 'sys/user',
        'perms': null,
        'type': 1,
        'icon': 'admin',
        'orderNum': 1,
        'open': null,
        'list': null
      }, {
        'menuId': 3,
        'parentId': 1,
        'parentName': null,
        'name': '角色管理',
        'url': 'sys/role',
        'perms': null,
        'type': 1,
        'icon': 'role',
        'orderNum': 2,
        'open': null,
        'list': null
      }, {
        'menuId': 4,
        'parentId': 1,
        'parentName': null,
        'name': '菜单管理',
        'url': 'sys/menu',
        'perms': null,
        'type': 1,
        'icon': 'menu',
        'orderNum': 3,
        'open': null,
        'list': null
      }, {
        'menuId': 5,
        'parentId': 1,
        'parentName': null,
        'name': 'SQL监控',
        'url': 'http://localhost:8080/renren-fast/druid/sql.html',
        'perms': null,
        'type': 1,
        'icon': 'sql',
        'orderNum': 4,
        'open': null,
        'list': null
      }, {
        'menuId': 6,
        'parentId': 1,
        'parentName': null,
        'name': '定时任务',
        'url': 'job/schedule',
        'perms': null,
        'type': 1,
        'icon': 'job',
        'orderNum': 5,
        'open': null,
        'list': null
      }, {
        'menuId': 27,
        'parentId': 1,
        'parentName': null,
        'name': '参数管理',
        'url': 'sys/config',
        'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
        'type': 1,
        'icon': 'config',
        'orderNum': 6,
        'open': null,
        'list': null
      }, {
        'menuId': 30,
        'parentId': 1,
        'parentName': null,
        'name': '文件上传',
        'url': 'oss/oss',
        'perms': 'sys:oss:all',
        'type': 1,
        'icon': 'oss',
        'orderNum': 6,
        'open': null,
        'list': null
      }, {
        'menuId': 29,
        'parentId': 1,
        'parentName': null,
        'name': '系统日志',
        'url': 'sys/log',
        'perms': 'sys:log:list',
        'type': 1,
        'icon': 'log',
        'orderNum': 7,
        'open': null,
        'list': null
      }]
    }],
    'code': 0,
    'permissions': ['sys:schedule:info', 'sys:menu:update',
      'sys:menu:delete', 'sys:config:info', 'sys:menu:list',
      'sys:config:save', 'sys:config:update', 'sys:schedule:resume',
      'sys:user:delete', 'sys:config:list', 'sys:user:update',
      'sys:role:list', 'sys:menu:info', 'sys:menu:select',
      'sys:schedule:update', 'sys:schedule:save', 'sys:role:select',
      'sys:user:list', 'sys:menu:save', 'sys:role:save',
      'sys:schedule:log', 'sys:role:info', 'sys:schedule:delete',
      'sys:role:update', 'sys:schedule:list', 'sys:user:info',
      'sys:schedule:run', 'sys:config:delete', 'sys:role:delete',
      'sys:user:save', 'sys:schedule:pause', 'sys:log:list',
      'sys:oss:all'
    ]
  }
}
