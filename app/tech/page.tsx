"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal, Shield, Cpu, Database, Network, Code, Lock, Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TechPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [hackingText, setHackingText] = useState("");
  
  useEffect(() => {
    // 生成数字雨字符
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const matrixArray = Array.from({ length: 200 }, () => chars[Math.floor(Math.random() * chars.length)]);
    setMatrixChars(matrixArray);
    
    // 打字机效果
    const text = "正在访问神经网络...";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setHackingText(text.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 数字雨背景 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs opacity-30 select-none"
            style={{
              left: `${(i * 3.33) % 100}%`,
              top: "-10vh",
            }}
            animate={{
              y: ["-10vh", "110vh"],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {matrixChars.slice(i * 6, i * 6 + 20).map((char, j) => (
              <motion.div 
                key={j} 
                className="block leading-tight"
                animate={{
                  color: Math.random() > 0.95 ? "#00ff41" : "#00ff00"
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* 赛博朋克网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* 动态流光效果 */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: "-200px",
              width: "calc(100% + 400px)",
            }}
            animate={{
              x: ["-200px", "200px"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 霓虹边框 */}
      <div className="absolute inset-0 border border-cyan-400/20">
        <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-0 right-0 w-32 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-0.5 bg-gradient-to-r from-green-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gradient-to-l from-green-400 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
        <div className="absolute top-0 right-0 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-0.5 h-32 bg-gradient-to-t from-pink-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-0.5 h-32 bg-gradient-to-t from-pink-400 to-transparent animate-pulse" />
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
              className="bg-black/80 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 backdrop-blur-sm font-mono"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              &lt; 返回
            </Button>
          </Link>
        </motion.div>

        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" as const }}
          className="text-center mb-16"
        >
          {/* 黑客风格标题 */}
          <div className="mb-8">
            <motion.div
              className="font-mono text-green-400 text-sm mb-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              {hackingText}
            </motion.div>
            <motion.div
              className="font-mono text-cyan-400 text-xs opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              连接已建立 ████████████ 100%
            </motion.div>
          </div>

          <motion.h1 
            className="text-7xl font-bold mb-6 font-mono"
            style={{ y }}
          >
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              赛博
            </motion.span>
            <motion.span
              className="block text-green-400 relative"
              animate={{
                textShadow: [
                  "0 0 5px #00ff00",
                  "0 0 20px #00ff00, 0 0 30px #00ff00",
                  "0 0 5px #00ff00",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              矩阵
              <motion.span
                className="absolute -right-2 top-0 w-1 h-full bg-green-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-cyan-300 max-w-3xl mx-auto font-mono leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            &gt; 进入现实与代码相遇的数字空间
          </motion.p>
        </motion.div>

        {/* 特性卡片网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: <Terminal className="h-8 w-8" />,
              title: "神经接口",
              description: "直接脑机连接协议",
              badge: "激活",
              borderColor: "border-cyan-400/30",
              glowColor: "shadow-cyan-400/20",
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "量子加密",
              description: "无法破解的安全算法",
              badge: "安全",
              borderColor: "border-green-400/30",
              glowColor: "shadow-green-400/20",
            },
            {
              icon: <Network className="h-8 w-8" />,
              title: "网格网络",
              description: "去中心化数据传输",
              badge: "在线",
              borderColor: "border-purple-400/30",
              glowColor: "shadow-purple-400/20",
            },
            {
              icon: <Eye className="h-8 w-8" />,
              title: "数字视觉",
              description: "增强现实感知",
              badge: "增强",
              borderColor: "border-pink-400/30",
              glowColor: "shadow-pink-400/20",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className={`bg-black/80 ${feature.borderColor} ${feature.glowColor} backdrop-blur-sm hover:bg-black/90 transition-all duration-300 border-2 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="p-3 bg-black/50 border border-cyan-400/30 rounded text-cyan-400"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                      }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <Badge 
                      variant="outline" 
                      className="bg-black/50 border-green-400/50 text-green-400 font-mono text-xs"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-cyan-400 group-hover:text-white transition-colors font-mono text-lg">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-mono text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 中央控制台区域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16"
        >
          <Card className="bg-black/90 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/10 max-w-5xl mx-auto overflow-hidden">
            <div className="relative">
              {/* 控制台头部 */}
              <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-cyan-400/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse animation-delay-1000"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse animation-delay-2000"></div>
                    </div>
                    <span className="font-mono text-cyan-400 text-sm">系统终端_v2.0.1</span>
                  </div>
                  <div className="font-mono text-green-400 text-xs">
                    CPU: 97% | RAM: 8.2GB | NET: ↑2.1MB/s ↓856KB/s
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="font-mono text-green-400 text-sm mb-6 leading-relaxed">
                  <div>&gt; 正在初始化赛博协议...</div>
                  <div>&gt; 正在建立安全连接...</div>
                  <div>&gt; 正在加载神经通路...</div>
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    &gt; 神经链接准备就绪_
                  </motion.div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                  进入矩阵
                </h2>
                <p className="text-cyan-300 mb-8 text-lg font-mono leading-relaxed">
                  &gt; 加入代码成为现实的数字革命
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-green-400 hover:from-cyan-400 hover:to-green-300 text-black font-bold px-8 py-4 font-mono text-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  >
                    &gt; 连接矩阵 &lt;
                  </Button>
                </motion.div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* 底部扫描线效果 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
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