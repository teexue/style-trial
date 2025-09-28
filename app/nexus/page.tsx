"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Eye, 
  Shield, 
  Cpu, 
  Satellite, 
  Lock, 
  Zap, 
  Brain, 
  Database, 
  Globe, 
  Scan,
  Users,
  Activity,
  AlertTriangle,
  Fingerprint,
  Wifi
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NexusPage() {
  const { scrollYProgress } = useScroll();
  const particleRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const dataFlow = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const [quantumTime, setQuantumTime] = useState("");
  const [securityLevel, setSecurityLevel] = useState("OMEGA");
  const [activeAgents, setActiveAgents] = useState(247);
  const [dataStreams, setDataStreams] = useState(1847);
  const [threatIndex, setThreatIndex] = useState(0.23);
  const [neuralActivity, setNeuralActivity] = useState(87);
  const [encryptionLayers, setEncryptionLayers] = useState(256);
  const [classifiedOperations, setClassifiedOperations] = useState<Array<{
    codename: string;
    status: '激活' | '待定' | '机密';
    priority: '紧急' | '高' | '标准';
  }>>([]);

  useEffect(() => {
    // 量子时间系统
    const updateQuantumTime = () => {
      const now = new Date();
      const quantum = Math.floor(Math.random() * 9999);
      setQuantumTime(`${now.toISOString().substr(11, 8)}.${quantum}`);
    };

    updateQuantumTime();
    const timer = setInterval(updateQuantumTime, 1000);

    // 初始化神秘数据
    const securityLevels = ["ALPHA", "BETA", "GAMMA", "DELTA", "EPSILON", "ZETA", "ETA", "THETA", "IOTA", "KAPPA", "LAMBDA", "MU", "NU", "XI", "OMICRON", "PI", "RHO", "SIGMA", "TAU", "UPSILON", "PHI", "CHI", "PSI", "OMEGA"];
    
    const operations = [
      { codename: "幻影回声", status: '激活' as const, priority: '紧急' as const },
      { codename: "量子漂移", status: '待定' as const, priority: '高' as const },
      { codename: "神经风暴", status: '机密' as const, priority: '紧急' as const },
      { codename: "暗黑棱镜", status: '激活' as const, priority: '标准' as const },
      { codename: "虚空催化", status: '待定' as const, priority: '高' as const },
      { codename: "幽灵协议", status: '机密' as const, priority: '紧急' as const },
      { codename: "无限之门", status: '激活' as const, priority: '高' as const },
      { codename: "阴影联结", status: '机密' as const, priority: '紧急' as const },
    ];

    setClassifiedOperations(operations.slice(0, 5));

    // 神秘数据更新
    const dataTimer = setInterval(() => {
      setSecurityLevel(securityLevels[Math.floor(Math.random() * securityLevels.length)]);
      setActiveAgents(prev => prev + Math.floor(Math.random() * 20) - 10);
      setDataStreams(prev => prev + Math.floor(Math.random() * 200) - 100);
      setThreatIndex(Math.random() * 0.5 + 0.1);
      setNeuralActivity(Math.floor(Math.random() * 30) + 70);
      setEncryptionLayers(prev => {
        const change = Math.floor(Math.random() * 64) - 32;
        return Math.max(128, Math.min(512, prev + change));
      });

      // 随机更新作战行动
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      setClassifiedOperations(prev => {
        const newOps = [randomOp, ...prev.slice(0, 4)];
        return newOps;
      });
    }, 3500);

    return () => {
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "激活": return "text-green-400 bg-green-950/30 border-green-500/50";
      case "待定": return "text-yellow-400 bg-yellow-950/30 border-yellow-500/50";
      case "机密": return "text-purple-400 bg-purple-950/30 border-purple-500/50";
      default: return "text-gray-400 bg-gray-950/30 border-gray-500/50";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "紧急": return "text-red-400 border-red-500";
      case "高": return "text-orange-400 border-orange-500";
      case "标准": return "text-blue-400 border-blue-500";
      default: return "text-gray-400 border-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950 relative overflow-hidden">
      {/* 神秘粒子系统背景 */}
      <div className="absolute inset-0">
        {/* 量子网格 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* 浮动粒子 */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 数据流效果 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 神秘全息投影效果 */}
      <div className="absolute top-20 right-20 w-96 h-96 opacity-20">
        <motion.div
          style={{ rotate: particleRotate }}
          className="w-full h-full relative"
        >
          {/* 外圈 */}
          <div className="absolute inset-0 border-2 border-indigo-400/40 rounded-full" />
          <div className="absolute inset-8 border border-purple-400/30 rounded-full" />
          <div className="absolute inset-16 border border-blue-400/20 rounded-full" />
          
          {/* 中心神秘符号 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-indigo-500/60 rounded-full flex items-center justify-center"
            >
              <Eye className="h-8 w-8 text-indigo-400" />
            </motion.div>
          </div>

          {/* 轨道数据点 */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-purple-500/60 rounded-full"
              style={{
                left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
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
              className="bg-black/90 border-indigo-500/80 text-indigo-300 hover:bg-indigo-950/50 hover:border-indigo-400 backdrop-blur-sm font-mono border-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              [神经链接已终止]
            </Button>
          </Link>
        </motion.div>

        {/* 神秘标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" as const }}
          className="text-center mb-16"
        >
          <motion.div className="mb-8">
            <div className="relative inline-block">
              {/* 神秘能量场 */}
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 rounded-full blur-2xl" />
              
              <motion.div
                style={{ rotate: particleRotate }}
                className="relative mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 border-4 border-indigo-500/60 rounded-full flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                  {/* 内部能量流 */}
                  <motion.div
                    className="absolute inset-2 border-2 border-purple-400/40 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                  <Brain className="h-12 w-12 text-indigo-400 relative z-10" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              {/* 量子标识 */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.7)",
                    "0 0 0 10px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Fingerprint className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 className="text-8xl font-bold mb-6 font-mono tracking-wider">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ◉ 联结 ◉
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 mt-2"
              animate={{
                backgroundPosition: ["100%", "0%", "100%"],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              ≡ 协议 ≡
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ duration: 2, delay: 1 }}
            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 via-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"
          />
          
          <motion.div 
            className="text-xl text-indigo-300 max-w-4xl mx-auto font-mono leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="mb-4 text-purple-400">
              ⬟ 机密神经接口 ⬟
            </div>
            <div className="text-lg">
              &gt; 量子加密意识桥接激活
            </div>
            <div className="text-sm mt-2 text-indigo-400">
              警告: 未授权访问将导致神经反馈
            </div>
          </motion.div>
        </motion.div>

        {/* 神秘系统模块 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "神经网络",
              description: "量子意识矩阵",
              status: "已同步",
              color: "border-purple-500/80 shadow-purple-500/40",
              statusColor: "text-purple-400",
              bgColor: "bg-purple-950/20",
            },
            {
              icon: <Database className="h-8 w-8" />,
              title: "虚空档案",
              description: "加密数据圣殿",
              status: "已保护",
              color: "border-indigo-500/80 shadow-indigo-500/40",
              statusColor: "text-indigo-400",
              bgColor: "bg-indigo-950/20",
            },
            {
              icon: <Globe className="h-8 w-8" />,
              title: "幽灵网络",
              description: "幻影通信网格",
              status: "已隐身",
              color: "border-cyan-500/80 shadow-cyan-500/40",
              statusColor: "text-cyan-400",
              bgColor: "bg-cyan-950/20",
            },
            {
              icon: <Scan className="h-8 w-8" />,
              title: "量子之眼",
              description: "现实监控阵列",
              status: "观察中",
              color: "border-blue-500/80 shadow-blue-500/40",
              statusColor: "text-blue-400",
              bgColor: "bg-blue-950/20",
            },
          ].map((module, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className={`${module.bgColor} ${module.color} backdrop-blur-sm hover:bg-black/80 transition-all duration-300 border-2 relative overflow-hidden`}>
                {/* 神秘能量条 */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600/20 via-indigo-500/60 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="p-3 bg-black/80 border-2 border-indigo-500/50 rounded-lg text-indigo-400 relative"
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)",
                        borderColor: "rgba(99, 102, 241, 0.8)"
                      }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      {module.icon}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <Badge 
                      variant="outline" 
                      className={`bg-black/80 border-2 ${module.statusColor} font-mono text-xs px-3 py-1 font-bold`}
                    >
                      ◈ {module.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-white group-hover:text-indigo-400 transition-colors font-mono text-sm font-bold">
                    ▷ {module.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-mono text-xs leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 神秘控制中心 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16"
        >
          <Card className="bg-black/95 border-indigo-500/60 border-2 shadow-2xl relative overflow-hidden">
            {/* 量子能量条 */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-600 via-purple-500 via-blue-500 via-purple-500 to-indigo-600 opacity-80" />
            
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between mb-6">
                <CardTitle className="text-indigo-400 font-mono text-2xl font-bold flex items-center">
                  <Eye className="mr-3 h-6 w-6" />
                  联结指挥接口
                  <motion.div
                    className="ml-4 w-4 h-4 bg-purple-500 rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-purple-950/80 text-purple-300 font-mono border-purple-500">
                    许可等级: {securityLevel}
                  </Badge>
                  <Badge className="bg-indigo-950/80 text-indigo-300 font-mono border-indigo-500">
                    量子时间: {quantumTime}
                  </Badge>
                </div>
              </div>

              {/* 双栏神秘数据 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 左侧：神秘状态 */}
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-indigo-400 font-mono font-bold mb-4 text-lg">⬢ 神经状态</h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                      {/* 活跃特工 */}
                      <div className="bg-indigo-950/30 p-3 border border-indigo-500/50 rounded">
                        <div className="text-indigo-300 mb-1">活跃特工</div>
                        <div className="text-white text-lg font-bold">{activeAgents}</div>
                        <div className="text-indigo-300 text-xs">操作员</div>
                      </div>
                      
                      {/* 数据流 */}
                      <div className="bg-purple-950/30 p-3 border border-purple-500/50 rounded">
                        <div className="text-purple-300 mb-1">数据流</div>
                        <div className="text-white text-lg font-bold">{dataStreams}</div>
                        <div className="text-purple-300 text-xs">TB/秒</div>
                      </div>
                      
                      {/* 威胁指数 */}
                      <div className="bg-cyan-950/30 p-3 border border-cyan-500/50 rounded">
                        <div className="text-cyan-300 mb-1">威胁指数</div>
                        <div className="text-cyan-400 text-lg font-bold">{threatIndex.toFixed(2)}</div>
                        <div className="text-cyan-300 text-xs">异常</div>
                      </div>
                      
                      {/* 神经活动 */}
                      <div className="bg-blue-950/30 p-3 border border-blue-500/50 rounded">
                        <div className="text-blue-300 mb-1">神经同步</div>
                        <div className="text-blue-400 text-lg font-bold">{neuralActivity}%</div>
                        <div className="text-blue-300 text-xs">一致性</div>
                      </div>
                    </div>

                    {/* 加密系统 */}
                    <div className="mt-6 bg-black/50 p-4 border border-indigo-500/30 rounded">
                      <div className="text-indigo-400 font-bold mb-3">🔐 量子加密</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-300">AES-{encryptionLayers}</span>
                          <span className="text-green-400">激活</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">量子密钥</span>
                          <span className="text-blue-400">纠缠</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">神经密码</span>
                          <span className="text-purple-400">安全</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右侧：全息显示 */}
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-purple-400 font-mono font-bold mb-4 text-lg">◈ 全息接口</h3>
                    
                    {/* 3D全息投影模拟 */}
                    <div className="bg-black/70 border-2 border-purple-500/50 rounded-lg p-4 mb-6 relative overflow-hidden">
                      <div className="relative w-48 h-48 mx-auto">
                        {/* 全息圆环 */}
                        <div className="absolute inset-0 border-2 border-indigo-500/40 rounded-full" />
                        <div className="absolute inset-4 border border-purple-500/30 rounded-full" />
                        <div className="absolute inset-8 border border-blue-500/20 rounded-full" />
                        
                        {/* 量子扫描线 */}
                        <motion.div
                          style={{ rotate: particleRotate }}
                          className="absolute inset-0 origin-center"
                        >
                          <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-t from-purple-500 via-indigo-500 to-transparent transform -translate-x-1/2 -translate-y-24" />
                        </motion.div>
                        
                        {/* 全息网格 */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-indigo-500/30 transform -translate-y-1/2" />
                        <div className="absolute left-1/2 top-0 h-full w-px bg-purple-500/30 transform -translate-x-1/2" />
                        
                        {/* 量子数据节点 */}
                        {[
                          { x: 70, y: 30, type: 'quantum' },
                          { x: 25, y: 60, type: 'neural' },
                          { x: 80, y: 75, type: 'encrypted' },
                          { x: 40, y: 20, type: 'void' },
                          { x: 60, y: 85, type: 'phantom' },
                        ].map((node, idx) => (
                          <motion.div
                            key={idx}
                            className={`absolute w-3 h-3 rounded-full ${
                              node.type === 'quantum' ? 'bg-indigo-500' :
                              node.type === 'neural' ? 'bg-purple-500' :
                              node.type === 'encrypted' ? 'bg-cyan-500' :
                              node.type === 'void' ? 'bg-blue-500' : 'bg-pink-500'
                            }`}
                            style={{
                              left: `${node.x}%`,
                              top: `${node.y}%`,
                            }}
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.6, 1, 0.6],
                              boxShadow: [
                                "0 0 0 0 currentColor",
                                "0 0 0 8px transparent",
                                "0 0 0 0 currentColor"
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.6
                            }}
                          />
                        ))}
                        
                        {/* 中心量子核心 */}
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                          <motion.div
                            className="absolute inset-0 border-2 border-white/50 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                      </div>
                      
                      <div className="text-center mt-3">
                        <div className="text-purple-400 font-mono text-xs">量子矩阵</div>
                        <div className="text-indigo-300 font-mono text-xs">维度相位: 稳定</div>
                      </div>
                    </div>

                    {/* 空间坐标 */}
                    <div className="bg-purple-950/30 p-3 border border-purple-500/50 rounded mb-4">
                      <div className="text-purple-400 font-mono font-bold mb-2">◯ 量子坐标</div>
                      <div className="font-mono text-sm space-y-1">
                        <div className="text-purple-300">维度-X: 42.7128° ∞</div>
                        <div className="text-purple-300">维度-Y: 74.0060° ∞</div>
                        <div className="text-purple-300">维度-Z: 11.2847° ∞</div>
                        <div className="text-purple-300">相位: 量子通量</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 机密行动系统 */}
              <div className="mt-8 pt-6 border-t-2 border-indigo-500/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-indigo-400 font-mono font-bold text-lg flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    机密行动
                  </h3>
                  <div className="text-xs font-mono text-gray-400">
                    最后同步: {quantumTime}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  {classifiedOperations.map((operation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-center justify-between p-4 rounded border-l-4 bg-black/40 ${
                        operation.status === '激活' ? 'border-green-500' :
                        operation.status === '待定' ? 'border-yellow-500' :
                        'border-purple-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-4 ${
                          operation.status === '激活' ? 'bg-green-500 animate-pulse' :
                          operation.status === '待定' ? 'bg-yellow-500' :
                          'bg-purple-500 animate-pulse'
                        }`} />
                        <div>
                          <span className="font-mono text-sm text-white font-bold">{operation.codename}</span>
                          <div className="text-xs text-gray-400 font-mono mt-1">
                            {operation.status === '机密' ? '█████████████' : `状态: ${operation.status}`}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant="outline" 
                          className={`font-mono text-xs ${getStatusColor(operation.status)}`}
                        >
                          {operation.status}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`font-mono text-xs ${getPriorityColor(operation.priority)}`}
                        >
                          {operation.priority}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 神秘协议启动按钮 */}
              <div className="mt-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-800 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 text-white font-mono text-lg px-12 py-6 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 border-2 border-indigo-500/80 relative overflow-hidden group"
                  >
                    {/* 量子脉冲效果 */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))",
                          "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))",
                          "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Brain className="mr-3 h-5 w-5" />
                      ◈ 启动联结协议 ◈
                      <Eye className="ml-3 h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      {/* 底部量子扫描线 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-500/60 via-indigo-500/60 to-transparent"
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}