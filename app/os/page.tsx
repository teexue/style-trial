"use client";

import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Monitor, Folder, FileText, Image, Music, 
  Video, Settings, Calculator, Calendar, Clock, 
  Minimize2, Square, X, Volume2, Wifi, Battery, 
  Search, Grid3X3, Terminal, Chrome, Mail, Camera,
  MessageSquare, Users, Download, Trash2, Star,
  Sun, Moon, Maximize2
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// 窗口接口定义
interface WindowProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

// 应用程序数据
const applications = [
  { id: 'finder', name: '文件管理器', icon: <Folder className="h-8 w-8" />, color: 'bg-blue-500' },
  { id: 'terminal', name: '终端', icon: <Terminal className="h-8 w-8" />, color: 'bg-gray-800' },
  { id: 'browser', name: '浏览器', icon: <Chrome className="h-8 w-8" />, color: 'bg-red-500' },
  { id: 'calculator', name: '计算器', icon: <Calculator className="h-8 w-8" />, color: 'bg-orange-500' },
  { id: 'calendar', name: '日历', icon: <Calendar className="h-8 w-8" />, color: 'bg-green-500' },
  { id: 'mail', name: '邮件', icon: <Mail className="h-8 w-8" />, color: 'bg-blue-600' },
  { id: 'photos', name: '照片', icon: <Image className="h-8 w-8" />, color: 'bg-purple-500' },
  { id: 'music', name: '音乐', icon: <Music className="h-8 w-8" />, color: 'bg-pink-500' },
  { id: 'video', name: '视频', icon: <Video className="h-8 w-8" />, color: 'bg-indigo-500' },
  { id: 'settings', name: '设置', icon: <Settings className="h-8 w-8" />, color: 'bg-gray-600' },
  { id: 'camera', name: '相机', icon: <Camera className="h-8 w-8" />, color: 'bg-yellow-500' },
  { id: 'messages', name: '信息', icon: <MessageSquare className="h-8 w-8" />, color: 'bg-green-600' },
];

// 壁纸数据
const wallpapers = [
  {
    id: 'default',
    name: '默认渐变',
    preview: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
    background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
  },
  {
    id: 'ocean',
    name: '海洋蓝',
    preview: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #14b8a6 100%)',
    background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #14b8a6 100%)',
  },
  {
    id: 'sunset',
    name: '日落橙',
    preview: 'linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%)',
    background: 'linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%)',
  },
  {
    id: 'forest',
    name: '森林绿',
    preview: 'linear-gradient(135deg, #4ade80 0%, #10b981 50%, #0d9488 100%)',
    background: 'linear-gradient(135deg, #4ade80 0%, #10b981 50%, #0d9488 100%)',
  },
  {
    id: 'space',
    name: '深空紫',
    preview: 'linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)',
    background: 'linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)',
  },
  {
    id: 'minimal',
    name: '简约灰',
    preview: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%)',
    background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%)',
  },
  {
    id: 'dark',
    name: '暗夜黑',
    preview: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #000000 100%)',
    background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #000000 100%)',
  },
  {
    id: 'aurora',
    name: '极光绿',
    preview: 'linear-gradient(135deg, #86efac 0%, #3b82f6 50%, #8b5cf6 100%)',
    background: 'linear-gradient(135deg, #86efac 0%, #3b82f6 50%, #8b5cf6 100%)',
  },
];

export default function OSPage() {
  const [windows, setWindows] = useState<WindowProps[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highestZIndex, setHighestZIndex] = useState(1000);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers[0]);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [customWallpapers, setCustomWallpapers] = useState<Array<{
    id: string;
    name: string;
    preview: string;
    background: string;
  }>>([]);

  // 更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 创建窗口内容
  const createWindowContent = (appId: string) => {
    switch (appId) {
      case 'finder':
        return (
          <div className="p-4 h-full bg-gray-50">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="sm">◀</Button>
              <Button variant="ghost" size="sm">▶</Button>
              <div className="flex-1 bg-white rounded px-3 py-1 text-sm">文档</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: '文档', icon: <FileText className="h-8 w-8" />, color: 'text-blue-500' },
                { name: '图片', icon: <Image className="h-8 w-8" />, color: 'text-green-500' },
                { name: '音乐', icon: <Music className="h-8 w-8" />, color: 'text-purple-500' },
                { name: '视频', icon: <Video className="h-8 w-8" />, color: 'text-red-500' },
                { name: '下载', icon: <Download className="h-8 w-8" />, color: 'text-orange-500' },
                { name: '回收站', icon: <Trash2 className="h-8 w-8" />, color: 'text-gray-500' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-2 hover:bg-blue-100 rounded cursor-pointer">
                  <div className={item.color}>{item.icon}</div>
                  <span className="text-xs mt-1">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'terminal':
        return (
          <div className="bg-black text-green-400 p-4 font-mono text-sm h-full overflow-hidden">
            <div className="mb-2">Last login: {currentTime.toLocaleString()} on console</div>
            <div className="mb-2">WebOS Terminal v1.0.0</div>
            <div className="mb-4">Type 'help' for available commands.</div>
            <div className="flex items-center">
              <span className="text-blue-400">user@webos</span>
              <span className="text-white">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-white">$ </span>
              <span className="bg-green-400 w-2 h-4 ml-1 animate-pulse"></span>
            </div>
          </div>
        );
      
      case 'calculator':
        return (
          <div className="bg-gray-100 h-full flex flex-col">
            <div className="bg-black text-white text-right p-4 text-2xl font-mono">0</div>
            <div className="flex-1 grid grid-cols-4 gap-1 p-2">
              {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '0', '.', '='].map((btn, index) => (
                <Button
                  key={index}
                  variant={['C', '±', '%', '÷', '×', '-', '+', '='].includes(btn) ? "default" : "secondary"}
                  className={`h-12 ${btn === '0' && index === 16 ? 'col-span-2' : ''}`}
                >
                  {btn}
                </Button>
              ))}
            </div>
          </div>
        );
      
      case 'calendar':
        return (
          <div className="p-4 h-full bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{currentTime.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })}</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">◀</Button>
                <Button variant="ghost" size="sm">▶</Button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                <div key={day} className="p-2 font-semibold text-gray-600">{day}</div>
              ))}
              {Array.from({ length: 35 }, (_, i) => (
                <div key={i} className="p-2 hover:bg-blue-100 cursor-pointer rounded">
                  {i + 1 <= 31 ? i + 1 : ''}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'browser':
        return (
          <div className="h-full flex flex-col bg-white">
            <div className="flex items-center gap-2 p-2 border-b bg-gray-50">
              <Button variant="ghost" size="sm">◀</Button>
              <Button variant="ghost" size="sm">▶</Button>
              <Button variant="ghost" size="sm">⟳</Button>
              <div className="flex-1 bg-white border rounded px-3 py-1">https://webos.demo.com</div>
              <Button variant="ghost" size="sm">⭐</Button>
            </div>
            <div className="flex-1 p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">欢迎使用 WebOS 浏览器</h2>
                <p className="text-gray-600">您的网络世界从这里开始</p>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="p-4 h-full bg-gray-50 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">系统设置</h2>
              
              {/* 壁纸设置 */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Image className="h-5 w-5" />
                  桌面壁纸
                </h3>
                <p className="text-gray-600 mb-4">选择您喜欢的桌面背景</p>
                
                <div className="grid grid-cols-4 gap-3">
                  {wallpapers.map((wallpaper) => (
                    <button
                      key={wallpaper.id}
                      onClick={() => setCurrentWallpaper(wallpaper)}
                      className={`aspect-video rounded-lg relative overflow-hidden transition-all duration-200 hover:scale-105 ${
                        currentWallpaper.id === wallpaper.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                      }`}
                      style={{
                        background: wallpaper.preview,
                      }}
                    >
                      {currentWallpaper.id === wallpaper.id && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="mt-3 text-center">
                  <span className="text-sm text-gray-600">当前: {currentWallpaper.name}</span>
                </div>

                {/* 自定义壁纸上传 */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium text-gray-800 mb-3">自定义壁纸</h4>
                  
                  <div className="mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleWallpaperUpload}
                      className="hidden"
                      id="wallpaper-upload"
                    />
                    <label
                      htmlFor="wallpaper-upload"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
                    >
                      <Image className="h-4 w-4" />
                      上传壁纸
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      支持 JPG、PNG、GIF 格式，文件大小不超过 5MB
                    </p>
                  </div>

                  {/* 自定义壁纸网格 */}
                  {customWallpapers.length > 0 && (
                    <div className="grid grid-cols-4 gap-3">
                      {customWallpapers.map((wallpaper) => (
                        <div key={wallpaper.id} className="relative group">
                          <button
                            onClick={() => setCurrentWallpaper(wallpaper)}
                            className={`aspect-video rounded-lg relative overflow-hidden transition-all duration-200 hover:scale-105 w-full ${
                              currentWallpaper.id === wallpaper.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                            }`}
                            style={{
                              backgroundImage: `url('${wallpaper.preview}')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          >
                            {currentWallpaper.id === wallpaper.id && (
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                              </div>
                            )}
                          </button>
                          
                          {/* 删除按钮 */}
                          <button
                            onClick={() => deleteCustomWallpaper(wallpaper.id)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center hover:bg-red-600"
                            title="删除壁纸"
                          >
                            <X className="h-3 w-3" />
                          </button>
                          
                          <div className="mt-1 text-xs text-gray-600 truncate" title={wallpaper.name}>
                            {wallpaper.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 显示设置 */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  显示设置
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">深色模式</span>
                    <Button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      variant={isDarkMode ? "default" : "outline"}
                      size="sm"
                    >
                      {isDarkMode ? '开启' : '关闭'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* 系统信息 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">系统信息</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">操作系统</span>
                    <span className="text-gray-800">WebOS 1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">内核版本</span>
                    <span className="text-gray-800">React 19</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">运行时间</span>
                    <span className="text-gray-800">{Math.floor(Date.now() / 1000 % 3600)}秒</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">打开窗口</span>
                    <span className="text-gray-800">{windows.length}个</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-8 h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {applications.find(app => app.id === appId)?.name}
              </h3>
              <p className="text-gray-600">应用程序正在开发中...</p>
            </div>
          </div>
        );
    }
  };

  // 打开应用
  const openApp = (appId: string) => {
    const app = applications.find(a => a.id === appId);
    if (!app) return;

    const existingWindow = windows.find(w => w.id === appId);
    if (existingWindow) {
      // 如果窗口已存在，将其置顶
      bringToFront(appId);
      return;
    }

    const newWindow: WindowProps = {
      id: appId,
      title: app.name,
      icon: app.icon,
      content: createWindowContent(appId),
      x: Math.random() * 200 + 100,
      y: Math.random() * 100 + 100,
      width: appId === 'calculator' ? 300 : 600,
      height: appId === 'calculator' ? 400 : 500,
      isMinimized: false,
      isMaximized: false,
      zIndex: highestZIndex + 1,
    };

    setWindows(prev => [...prev, newWindow]);
    setHighestZIndex(prev => prev + 1);
  };

  // 关闭窗口
  const closeWindow = (windowId: string) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
  };

  // 最小化窗口
  const minimizeWindow = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
  };

  // 最大化/还原窗口
  const toggleMaximize = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { 
            ...w, 
            isMaximized: !w.isMaximized,
            x: w.isMaximized ? w.x : 0,
            y: w.isMaximized ? w.y : 0,
            width: w.isMaximized ? w.width : window.innerWidth,
            height: w.isMaximized ? w.height : window.innerHeight - 60,
          } 
        : w
    ));
  };

  // 将窗口置顶
  const bringToFront = (windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, zIndex: highestZIndex + 1, isMinimized: false }
        : w
    ));
    setHighestZIndex(prev => prev + 1);
  };

  // 处理窗口拖拽
  const handleMouseDown = (e: React.MouseEvent, windowId: string) => {
    const window = windows.find(w => w.id === windowId);
    if (!window || window.isMaximized) return;

    setDraggedWindow(windowId);
    setDragOffset({
      x: e.clientX - window.x,
      y: e.clientY - window.y,
    });
    bringToFront(windowId);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggedWindow) return;

    setWindows(prev => prev.map(w => 
      w.id === draggedWindow 
        ? { 
            ...w, 
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y,
          }
        : w
    ));
  };

  const handleMouseUp = () => {
    setDraggedWindow(null);
  };

  // 处理右键菜单
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  // 处理自定义壁纸上传
  const handleWallpaperUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 检查文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件');
      return;
    }

    // 检查文件大小 (限制5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('图片文件大小不能超过5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const customWallpaper = {
        id: `custom_${Date.now()}`,
        name: file.name.split('.')[0],
        preview: result, // 直接存储base64数据
        background: result, // 直接存储base64数据
      };

      setCustomWallpapers(prev => [...prev, customWallpaper]);
      setCurrentWallpaper(customWallpaper);
    };
    reader.readAsDataURL(file);
    
    // 清空input值，允许重复选择同一文件
    event.target.value = '';
  };

  // 删除自定义壁纸
  const deleteCustomWallpaper = (wallpaperId: string) => {
    setCustomWallpapers(prev => prev.filter(w => w.id !== wallpaperId));
    // 如果删除的是当前壁纸，切换到默认壁纸
    if (currentWallpaper.id === wallpaperId) {
      setCurrentWallpaper(wallpapers[0]);
    }
  };

  useEffect(() => {
    if (draggedWindow) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedWindow, dragOffset]);

  // 关闭右键菜单
  useEffect(() => {
    const handleClickOutside = () => {
      setContextMenu(null);
    };

    if (contextMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [contextMenu]);

  // Spotlight 搜索
  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen relative overflow-hidden transition-all duration-500"
      style={
        isDarkMode 
          ? { backgroundColor: '#111827' }
          : currentWallpaper.id.startsWith('custom_')
            ? {
                backgroundImage: `url('${currentWallpaper.background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }
            : {
                background: currentWallpaper.background,
              }
      }
      onContextMenu={handleContextMenu}
      onClick={closeContextMenu}
    >
      {/* 壁纸叠加层 */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* 顶部菜单栏 */}
      <div className={`fixed top-0 left-0 right-0 h-8 flex items-center justify-between px-4 text-white backdrop-blur-sm z-50 ${
        isDarkMode ? 'bg-gray-800/80' : 'bg-black/20'
      }`}>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-6 px-2">
              <ArrowLeft className="h-3 w-3 mr-1" />
              返回
            </Button>
          </Link>
          <span className="font-semibold">WebOS</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <button 
            onClick={() => setIsSpotlightOpen(true)}
            className="hover:bg-white/20 px-2 py-1 rounded flex items-center gap-1"
          >
            <Search className="h-3 w-3" />
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hover:bg-white/20 px-2 py-1 rounded"
          >
            {isDarkMode ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
          </button>
          <div className="flex items-center gap-1">
            <Wifi className="h-3 w-3" />
            <Volume2 className="h-3 w-3" />
            <Battery className="h-3 w-3" />
          </div>
          <div className="font-mono">
            {currentTime.toLocaleTimeString('zh-CN', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>

      {/* Spotlight 搜索 */}
      <AnimatePresence>
        {isSpotlightOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsSpotlightOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-96 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索应用程序..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-lg"
                  autoFocus
                />
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {filteredApps.map(app => (
                  <button
                    key={app.id}
                    onClick={() => {
                      openApp(app.id);
                      setIsSpotlightOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg text-left"
                  >
                    <div className={`p-2 rounded-lg ${app.color} text-white`}>
                      {app.icon}
                    </div>
                    <span className="font-medium">{app.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 窗口 */}
      <AnimatePresence>
        {windows.filter(w => !w.isMinimized).map(window => (
          <motion.div
            key={window.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              position: 'absolute',
              left: window.x,
              top: window.y,
              width: window.width,
              height: window.height,
              zIndex: window.zIndex,
            }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden border"
          >
            {/* 窗口标题栏 */}
            <div
              className="h-10 bg-gray-100 border-b flex items-center justify-between px-4 cursor-move"
              onMouseDown={(e) => handleMouseDown(e, window.id)}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4">{window.icon}</div>
                <span className="text-sm font-medium">{window.title}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => minimizeWindow(window.id)}
                  className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500"
                />
                <button
                  onClick={() => toggleMaximize(window.id)}
                  className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500"
                />
                <button
                  onClick={() => closeWindow(window.id)}
                  className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500"
                />
              </div>
            </div>
            
            {/* 窗口内容 */}
            <div className="h-full pb-10">
              {window.content}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-2xl backdrop-blur-md z-40 ${
          isDarkMode ? 'bg-gray-800/80' : 'bg-white/20'
        }`}
      >
        <div className="flex items-center gap-2">
          {applications.slice(0, 8).map(app => (
            <motion.button
              key={app.id}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openApp(app.id)}
              className={`p-3 rounded-xl ${app.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              {app.icon}
            </motion.button>
          ))}
          
          {/* 分隔线 */}
          <div className="w-px h-12 bg-white/30 mx-2" />
          
          {/* 回收站和设置 */}
          <motion.button
            whileHover={{ scale: 1.2, y: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => openApp('settings')}
            className="p-3 rounded-xl bg-gray-600 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Settings className="h-8 w-8" />
          </motion.button>
        </div>
      </motion.div>

      {/* 右键菜单 */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              left: contextMenu.x,
              top: contextMenu.y,
              zIndex: 9999,
            }}
            className={`min-w-48 py-2 rounded-lg shadow-xl border backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-4 py-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              桌面选项
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
            
            <button
              onClick={() => {
                openApp('settings');
                closeContextMenu();
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <Settings className="h-4 w-4" />
              系统设置
            </button>

            <label
              htmlFor="context-wallpaper-upload"
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                closeContextMenu();
              }}
            >
              <Image className="h-4 w-4" />
              上传壁纸
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleWallpaperUpload}
              className="hidden"
              id="context-wallpaper-upload"
            />
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
            <div className={`px-4 py-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              快速更换壁纸
            </div>
            
            <div className="px-2 py-2">
              <div className="grid grid-cols-4 gap-1">
                {[...wallpapers.slice(0, 6), ...customWallpapers.slice(0, 2)].map((wallpaper) => (
                  <button
                    key={wallpaper.id}
                    onClick={() => {
                      setCurrentWallpaper(wallpaper);
                      closeContextMenu();
                    }}
                    className={`aspect-video rounded relative transition-all duration-200 hover:scale-105 ${
                      currentWallpaper.id === wallpaper.id ? 'ring-1 ring-blue-500' : ''
                    }`}
                    style={
                      wallpaper.id.startsWith('custom_') 
                        ? {
                            backgroundImage: `url('${wallpaper.preview}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : {
                            background: wallpaper.preview,
                          }
                    }
                    title={wallpaper.name}
                  >
                    {currentWallpaper.id === wallpaper.id && (
                      <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* 如果有更多壁纸的提示 */}
              {customWallpapers.length > 2 && (
                <div className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  更多壁纸请在设置中查看
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 任务栏显示最小化窗口 */}
      {windows.filter(w => w.isMinimized).length > 0 && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {windows.filter(w => w.isMinimized).map(window => (
            <motion.button
              key={window.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => bringToFront(window.id)}
              className="p-2 bg-white/20 backdrop-blur rounded-lg text-white hover:bg-white/30"
            >
              <div className="w-6 h-6">{window.icon}</div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}