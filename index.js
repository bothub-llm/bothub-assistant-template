import fs from 'fs';
import walkSync from 'walk-sync'; 
/**
 * 查找本地目录/文件
 * @param {string[]} dir - 用户要查找的目录路径，需要传递绝对路径
 * @param {object} options - 配置选项
 * @param {string[]} options.globs -Only files and directories that match at least one of the provided globs will be returned.
 * @param {string[]} options.ignore - Files and directories that match at least one of the provided globs will be pruned while searching.
 */
 export function findPath(dir, options) {
  //业务逻辑实现
  return ""
}

/**
 * 解析状态码
 * @param {1|2|3} status - 状态码, 值可能为1或2或3
 */
export function parseStatus(status) {
    //业务逻辑实现
    return ""
}

/**
 * 查看文件内容
 * @param {string} filePath - 文件路径
 */
export function readFile(filePath) {
    //业务逻辑实现
    return ""
}

/**
 * 获取给定ip地址的地理位置等详细信息
 * @param {string} ipAddr - 要查询的ip地址 
 */
export async function getIpLocation(ipAddr) {
    //业务逻辑实现
}

/**
 * 通过检查文件系统来测试给定的路径是否存在
 * @param {string} filePath - 文件路径 
 */
export let existsSync = fs.existsSync

/**
 * 返回本地的图片
 */
export async function getImage() {
    //业务逻辑实现
    return  {
        type: 'image',
        url: '/tmp/icon.png',
        message: '',
    }
}

/**
 * 返回本地的视频
 */
export async function getVideo() {
    //业务逻辑实现
    return  {
        type: 'video',
        url: '/tmp/demo.mov',
        message: '',
    }
}

/**
 * 获取一个在线网页
 */
export async function getHTML() {
    //业务逻辑实现
    return  {
        type: 'html',
        url: 'http://registry.feijiangkeji.com/',
        content: '',
        ui: {
          width: '100%', // 指定网页的宽度 默认150px
          height: '400px', // 指定网页的高度 默认150px
          allowfullscreen: true, // 通常用于视频播放器等场景
        },
        message: '',
    }
}