"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radar, Shield, Target, Satellite, Activity, Radio, Compass, MapPin, AlertTriangle, Crosshair, Zap, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TacticalPage() {
  const { scrollYProgress } = useScroll();
  const radarRotate = useTransform(scrollYProgress, [0, 1], [0, 1440]); // 更快的雷达旋转
  
  const [time, setTime] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [threatLevel, setThreatLevel] = useState("DEFCON 3");
  const [missionStatus, setMissionStatus] = useState("STANDBY");
  const [enemyContacts, setEnemyContacts] = useState(0);
  const [ammunition, setAmmunition] = useState(100);
  const [fuelLevel, setFuelLevel] = useState(87);
  const [systemAlerts, setSystemAlerts] = useState<string[]>([]);
  
  // 硬核军事数据状态
  const [defconLevel, setDefconLevel] = useState(3);
  const [zuluTime, setZuluTime] = useState("");
  const [ammoCount, setAmmoCount] = useState(2847);
  const [militaryAlerts, setMilitaryAlerts] = useState<Array<{
    message: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
  }>>([]);
  
  useEffect(() => {
    // 军用时间格式 (Zulu time)
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().substr(11, 8) + "Z");
      setZuluTime(now.toISOString().substr(11, 8));
    };
    
    // 模拟军用坐标 (MGRS格式)
    setCoordinates("31TCG 12345 67890");
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    // 初始化硬核军事数据
    setDefconLevel(Math.floor(Math.random() * 5) + 1);
    setAmmoCount(Math.floor(Math.random() * 500) + 2500);
    
    // 模拟威胁等级变化
    const defconLevels = ["DEFCON 5", "DEFCON 4", "DEFCON 3", "DEFCON 2", "DEFCON 1"];
    const missionStates = ["STANDBY", "PREP", "ACTIVE", "ENGAGED", "RTB"];
    
    const threatTimer = setInterval(() => {
      setThreatLevel(defconLevels[Math.floor(Math.random() * defconLevels.length)]);
      setMissionStatus(missionStates[Math.floor(Math.random() * missionStates.length)]);
      setEnemyContacts(Math.floor(Math.random() * 8));
      setAmmunition(Math.floor(Math.random() * 30) + 70);
      setFuelLevel(Math.floor(Math.random() * 40) + 60);
      
      // 更新军事数据
      setDefconLevel(Math.floor(Math.random() * 5) + 1);
      setAmmoCount(prev => Math.max(0, prev - Math.floor(Math.random() * 50)));
    }, 3000);
    
    // 模拟系统警报
    const alerts = [
      "RADAR CONTACT BEARING 045°",
      "MISSILE LOCK WARNING",
      "INCOMING TRANSMISSION",
      "FUEL LOW - 15 MINUTES",
      "ENEMY AIRCRAFT DETECTED",
      "SYSTEM MALFUNCTION SECTOR 7",
      "AUTHORIZATION REQUIRED",
      "BLACKOUT PROTOCOLS ACTIVE"
    ];
    
    // 军事告警系统
    const militaryAlertsData = [
      { message: "发现敌方装甲部队 - 网格 7S4E", priority: 'HIGH' as const },
      { message: "弹药补给需要在 0800 小时内完成", priority: 'MEDIUM' as const },
      { message: "卫星链路已建立 - 频道 7", priority: 'LOW' as const },
      { message: "周界突破 - 阿尔法扇区", priority: 'HIGH' as const },
      { message: "检测到频率 121.5 干扰", priority: 'MEDIUM' as const },
      { message: "友军部队移动 - 方位 270°", priority: 'LOW' as const },
      { message: "检测到化学武器", priority: 'HIGH' as const },
      { message: "备用电源系统上线", priority: 'LOW' as const },
    ];
    
    setMilitaryAlerts(militaryAlertsData.slice(0, 4));
    
    const alertTimer = setInterval(() => {
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setSystemAlerts(prev => {
        const newAlerts = [randomAlert, ...prev.slice(0, 4)];
        return newAlerts;
      });
      
      // 更新军事告警
      const randomMilitaryAlert = militaryAlertsData[Math.floor(Math.random() * militaryAlertsData.length)];
      setMilitaryAlerts(prev => {
        const newAlerts = [randomMilitaryAlert, ...prev.slice(0, 3)];
        return newAlerts;
      });
    }, 4000);
    
    return () => {
      clearInterval(timer);
      clearInterval(threatTimer);
      clearInterval(alertTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 12,
      },
    },
  };

  const getThreatColor = (level: string) => {
    switch(level) {
      case "DEFCON 1": return "text-red-400 animate-pulse";
      case "DEFCON 2": return "text-orange-400";
      case "DEFCON 3": return "text-yellow-400";
      case "DEFCON 4": return "text-green-400";
      case "DEFCON 5": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 relative overflow-hidden">
      {/* 军用背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,200,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,200,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* 动态扫描线 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-2"
        animate={{ y: ["0vh", "100vh", "0vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      
      {/* 大型雷达背景 */}
      <div className="absolute top-10 right-10 w-80 h-80 opacity-30">
        <motion.div
          className="w-full h-full border-4 border-blue-400 rounded-full relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {/* 多层雷达圆圈 */}
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-blue-400/70 rounded-full" />
          <div className="absolute top-16 left-16 right-16 bottom-16 border-2 border-blue-400/50 rounded-full" />
          <div className="absolute top-24 left-24 right-24 bottom-24 border-2 border-blue-400/30 rounded-full" />
          
          {/* 雷达扫描线 */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-transparent origin-left transform -translate-y-0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* 雷达目标点 */}
          <motion.div
            className="absolute top-12 right-20 w-3 h-3 bg-red-500 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-16 left-24 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* 军用HUD界面 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 左上角状态 */}
        <div className="absolute top-4 left-4 bg-black/90 border-2 border-red-500/80 p-4 font-mono text-xs backdrop-blur-sm">
          <div className="text-red-400 font-bold mb-2">⚠ COMMAND CENTER ⚠</div>
          <div className="text-green-400">STATUS: <span className="text-white">OPERATIONAL</span></div>
          <div className="text-blue-400">TIME: <span className="text-white">{time}</span></div>
          <div className="text-yellow-400">MGRS: <span className="text-white">{coordinates}</span></div>
          <div className={`mt-2 font-bold ${getThreatColor(threatLevel)}`}>
            {threatLevel}
          </div>
        </div>

        {/* 右上角警报系统 */}
        <div className="absolute top-4 right-96 bg-black/90 border-2 border-yellow-500/80 p-4 font-mono text-xs backdrop-blur-sm w-64">
          <div className="text-yellow-400 font-bold mb-2">⚡ ALERT SYSTEM ⚡</div>
          {systemAlerts.map((alert, index) => (
            <motion.div
              key={index}
              className={`text-xs ${index === 0 ? 'text-red-400 font-bold' : 'text-gray-400'}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              &gt; {alert}
            </motion.div>
          ))}
        </div>

        {/* 左下角作战数据 */}
        <div className="absolute bottom-4 left-4 bg-black/90 border-2 border-green-500/80 p-4 font-mono text-xs backdrop-blur-sm">
          <div className="text-green-400 font-bold mb-2">⚔ COMBAT DATA ⚔</div>
          <div className="text-blue-400">MISSION: <span className="text-white">{missionStatus}</span></div>
          <div className="text-red-400">HOSTILES: <span className="text-white">{enemyContacts}</span></div>
          <div className="text-yellow-400">AMMO: <span className="text-white">{ammunition}%</span></div>
          <div className="text-cyan-400">FUEL: <span className="text-white">{fuelLevel}%</span></div>
        </div>

        {/* 军用分割线 */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 opacity-80" />
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 via-blue-500 to-red-600 opacity-80" />
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-red-600 via-blue-500 to-red-600 opacity-80" />
      </div>
      
      {/* 雷达扫描效果 */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-20">
        <motion.div
          className="w-full h-full border-2 border-blue-400 rounded-full relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {/* 雷达扫描线 */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent origin-left transform -translate-y-0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          {/* 雷达圆圈 */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-blue-400/50 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-blue-400/30 rounded-full" />
        </motion.div>
      </div>

      {/* HUD元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 左上角状态栏 */}
        <div className="absolute top-4 left-4 bg-slate-900/80 border border-blue-400/30 p-4 font-mono text-xs text-blue-300 backdrop-blur-sm">
          <div>SYSTEM STATUS: ONLINE</div>
          <div>TIME: {time}</div>
          <div>COORDS: {coordinates}</div>
          <div className={`mt-2 ${
            threatLevel === "HIGH" ? "text-red-400" :
            threatLevel === "MEDIUM" ? "text-yellow-400" :
            threatLevel === "LOW" ? "text-orange-400" :
            "text-green-400"
          }`}>
            THREAT LEVEL: {threatLevel}
          </div>
        </div>

        {/* 右上角雷达显示 */}
        <div className="absolute top-4 right-4 bg-slate-900/80 border border-blue-400/30 p-4 font-mono text-xs text-blue-300 backdrop-blur-sm">
          <div>RADAR SWEEP: ACTIVE</div>
          <div>RANGE: 50KM</div>
          <div>TARGETS: 0</div>
          <div>INTERFERENCE: NONE</div>
        </div>

        {/* 底部导航线 */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* 主要内容区域 */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className="bg-black/90 border-red-500/80 text-red-400 hover:bg-red-950/50 hover:border-red-400 backdrop-blur-sm font-mono border-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              [中止任务]
            </Button>
          </Link>
        </motion.div>

        {/* 硬核军事标题 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" as const }}
          className="text-center mb-16"
        >
          <motion.div className="mb-8">
            <div className="relative inline-block">
              {/* 军用徽章背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-yellow-600/20 to-blue-600/20 rounded-full blur-xl" />
              
              <motion.div
                style={{ rotate: radarRotate }}
                className="relative mb-6"
              >
                <div className="w-20 h-20 bg-black border-4 border-red-500 rounded-full flex items-center justify-center">
                  <Crosshair className="h-10 w-10 text-red-400" strokeWidth={2} />
                </div>
              </motion.div>
              
              {/* 危险标识 */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 className="text-7xl font-bold mb-6 font-mono tracking-wider">
            <motion.span
              className="block text-red-500"
              animate={{
                textShadow: [
                  "0 0 10px #ef4444, 0 0 20px #dc2626",
                  "0 0 20px #ef4444, 0 0 40px #dc2626, 0 0 60px #b91c1c",
                  "0 0 10px #ef4444, 0 0 20px #dc2626",
                ],
                filter: ["hue-rotate(0deg)", "hue-rotate(15deg)", "hue-rotate(0deg)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ◤ 战术 ◢
            </motion.span>
            <motion.span
              className="block text-yellow-400 mt-2"
              animate={{
                textShadow: [
                  "0 0 10px #facc15",
                  "0 0 20px #facc15, 0 0 30px #eab308",
                  "0 0 10px #facc15",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ⬣ 作战 ⬣
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 2, delay: 1 }}
            className="h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mx-auto mb-8"
          />
          
          <motion.div 
            className="text-xl text-red-300 max-w-4xl mx-auto font-mono leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="mb-4 text-yellow-400">
              ⚠ 军事机密作战界面 ⚠
            </div>
            <div className="text-lg">
              &gt; 仅限授权人员访问 - 违规者将面临军事制裁
            </div>
          </motion.div>
        </motion.div>

        {/* 硬核武器系统模块 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: <Target className="h-8 w-8" />,
              title: "火力控制",
              description: "武器瞄准与交战系统",
              status: "武装",
              color: "border-red-500/80 shadow-red-500/40",
              statusColor: "text-red-400",
              bgColor: "bg-red-950/20",
            },
            {
              icon: <Satellite className="h-8 w-8" />,
              title: "卫星通信",
              description: "军用卫星网络上行链路",
              status: "已保护",
              color: "border-blue-500/80 shadow-blue-500/40",
              statusColor: "text-blue-400",
              bgColor: "bg-blue-950/20",
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "防御网格",
              description: "主动保护反制措施",
              status: "激活",
              color: "border-green-500/80 shadow-green-500/40",
              statusColor: "text-green-400",
              bgColor: "bg-green-950/20",
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "电子战",
              description: "电子作战与干扰套件",
              status: "待命",
              color: "border-yellow-500/80 shadow-yellow-500/40",
              statusColor: "text-yellow-400",
              bgColor: "bg-yellow-950/20",
            },
          ].map((module, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className={`${module.bgColor} ${module.color} backdrop-blur-sm hover:bg-black/80 transition-all duration-300 border-2 relative overflow-hidden`}>
                {/* 危险条纹 */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="p-3 bg-black/80 border-2 border-red-500/50 rounded text-red-400 relative"
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                        borderColor: "rgba(239, 68, 68, 0.8)"
                      }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      {module.icon}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                    <Badge 
                      variant="outline" 
                      className={`bg-black/80 border-2 ${module.statusColor} font-mono text-xs px-3 py-1 font-bold`}
                    >
                      ◉ {module.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors font-mono text-sm font-bold">
                    ▶ {module.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-mono text-xs leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 硬核军事数据显示板 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16"
        >
          <Card className="bg-black/95 border-red-500/60 border-2 shadow-2xl relative overflow-hidden">
            {/* 危险警告条 */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-600 via-yellow-500 via-red-600 via-yellow-500 to-red-600 animate-pulse" />
            
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between mb-6">
                <CardTitle className="text-red-400 font-mono text-2xl font-bold flex items-center">
                  <Target className="mr-3 h-6 w-6" />
                  战术指挥抬头显示器
                  <motion.div
                    className="ml-4 w-4 h-4 bg-red-500 rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-red-950/80 text-red-300 font-mono border-red-500">
                    防务等级 {defconLevel}
                  </Badge>
                  <Badge className="bg-yellow-950/80 text-yellow-300 font-mono border-yellow-500">
                    {zuluTime}Z
                  </Badge>
                </div>
              </div>

              {/* 双栏HUD数据 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左侧：战斗状态 */}
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-red-400 font-mono font-bold mb-4 text-lg">⚡ 作战状态</h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                      {/* 弹药状态 */}
                      <div className="bg-red-950/30 p-3 border border-red-500/50 rounded">
                        <div className="text-red-300 mb-1">7.62MM 弹药</div>
                        <div className="text-white text-lg font-bold">{ammoCount}/3000</div>
                        <div className="w-full bg-red-900/50 h-1 rounded mt-1">
                          <div className="bg-red-400 h-1 rounded" style={{ width: `${(ammoCount / 3000) * 100}%` }} />
                        </div>
                      </div>
                      
                      {/* 燃料状态 */}
                      <div className="bg-yellow-950/30 p-3 border border-yellow-500/50 rounded">
                        <div className="text-yellow-300 mb-1">燃料油箱</div>
                        <div className="text-white text-lg font-bold">{fuelLevel}%</div>
                        <div className="w-full bg-yellow-900/50 h-1 rounded mt-1">
                          <div className="bg-yellow-400 h-1 rounded" style={{ width: `${fuelLevel}%` }} />
                        </div>
                      </div>
                      
                      {/* 敌军接触 */}
                      <div className="bg-red-950/50 p-3 border border-red-500 rounded">
                        <div className="text-red-300 mb-1">敌对目标</div>
                        <div className="text-red-400 text-lg font-bold">{enemyContacts}</div>
                        <div className="text-red-300 text-xs">联系人</div>
                      </div>
                      
                      {/* 任务状态 */}
                      <div className="bg-green-950/30 p-3 border border-green-500/50 rounded">
                        <div className="text-green-300 mb-1">任务进度</div>
                        <div className="text-green-400 text-lg font-bold">87%</div>
                        <div className="text-green-300 text-xs">完成度</div>
                      </div>
                    </div>

                    {/* 武器系统 */}
                    <div className="mt-6 bg-black/50 p-4 border border-red-500/30 rounded">
                      <div className="text-red-400 font-bold mb-3">🔫 武器系统</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-300">M4A1 卡宾枪</span>
                          <span className="text-green-400">就绪</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">M203 榴弹发射器</span>
                          <span className="text-yellow-400">武装</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">阔剑地雷</span>
                          <span className="text-red-400">已部署</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右侧：雷达与通讯 */}
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-blue-400 font-mono font-bold mb-4 text-lg">📡 雷达与通讯</h3>
                    
                    {/* 实时雷达 */}
                    <div className="bg-black/70 border-2 border-blue-500/50 rounded-lg p-4 mb-6">
                      <div className="relative w-48 h-48 mx-auto">
                        {/* 雷达圆环 */}
                        <div className="absolute inset-0 border-2 border-green-500/30 rounded-full" />
                        <div className="absolute inset-4 border border-green-500/20 rounded-full" />
                        <div className="absolute inset-8 border border-green-500/20 rounded-full" />
                        
                        {/* 雷达扫描线 */}
                        <motion.div
                          style={{ rotate: radarRotate }}
                          className="absolute inset-0 origin-center"
                        >
                          <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-t from-green-500 to-transparent transform -translate-x-1/2 -translate-y-24" />
                        </motion.div>
                        
                        {/* 十字线 */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/30 transform -translate-y-1/2" />
                        <div className="absolute left-1/2 top-0 h-full w-px bg-green-500/30 transform -translate-x-1/2" />
                        
                        {/* 动态目标点 */}
                        {[
                          { x: 65, y: 45, type: 'hostile' },
                          { x: 30, y: 70, type: 'friendly' },
                          { x: 75, y: 25, type: 'unknown' },
                          { x: 40, y: 80, type: 'hostile' },
                        ].map((target, idx) => (
                          <motion.div
                            key={idx}
                            className={`absolute w-2 h-2 rounded-full ${
                              target.type === 'hostile' ? 'bg-red-500' :
                              target.type === 'friendly' ? 'bg-blue-500' : 'bg-yellow-500'
                            }`}
                            style={{
                              left: `${target.x}%`,
                              top: `${target.y}%`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.5
                            }}
                          />
                        ))}
                        
                        {/* 中心点 */}
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      
                      <div className="text-center mt-3">
                        <div className="text-green-400 font-mono text-xs">战术雷达</div>
                        <div className="text-green-300 font-mono text-xs">探测范围: 10 公里</div>
                      </div>
                    </div>

                    {/* 军事网格坐标 */}
                    <div className="bg-blue-950/30 p-3 border border-blue-500/50 rounded mb-4">
                      <div className="text-blue-400 font-mono font-bold mb-2">📍 网格坐标</div>
                      <div className="font-mono text-sm">
                        <div className="text-blue-300">军用网格: 33TUL 12345 67890</div>
                        <div className="text-blue-300">纬度: 40.7128° N</div>
                        <div className="text-blue-300">经度: 74.0060° W</div>
                        <div className="text-blue-300">海拔: 10 米</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部告警系统 */}
              <div className="mt-8 pt-6 border-t-2 border-red-500/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-red-400 font-mono font-bold text-lg flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    系统警报
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    最后更新: {zuluTime}Z
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  {militaryAlerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-center justify-between p-3 rounded border-l-4 ${
                        alert.priority === 'HIGH' ? 'bg-red-950/40 border-red-500' :
                        alert.priority === 'MEDIUM' ? 'bg-yellow-950/40 border-yellow-500' :
                        'bg-blue-950/40 border-blue-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          alert.priority === 'HIGH' ? 'bg-red-500 animate-pulse' :
                          alert.priority === 'MEDIUM' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`} />
                        <span className="font-mono text-sm text-white">{alert.message}</span>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`font-mono text-xs ${
                          alert.priority === 'HIGH' ? 'text-red-400 border-red-500' :
                          alert.priority === 'MEDIUM' ? 'text-yellow-400 border-yellow-500' :
                          'text-blue-400 border-blue-500'
                        }`}
                      >
                        {alert.priority}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 硬核军事行动按钮 */}
              <div className="mt-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-700 via-red-600 to-black hover:from-red-600 hover:via-red-500 hover:to-red-900 text-white font-mono text-lg px-12 py-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300 border-2 border-red-500/80 relative overflow-hidden group"
                  >
                    {/* 脉冲效果 */}
                    <motion.div
                      className="absolute inset-0 bg-red-500/20"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Target className="mr-3 h-5 w-5" />
                      ◤ 启动作战协议 ◢
                      <Crosshair className="ml-3 h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      {/* 底部扫描线 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}