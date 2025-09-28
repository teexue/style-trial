"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart, Minus, Palette, Radar, Brain, Apple, Monitor } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const styles = [
    {
      title: "科技未来",
      description: "体验前沿科技的视觉冲击，探索数字世界的无限可能",
      href: "/tech",
      icon: <Zap className="h-8 w-8" />,
      badge: "Tech",
      gradient: "from-slate-900 via-purple-900 to-slate-900",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      hoverEffect: "hover:border-cyan-400/50 hover:shadow-cyan-500/25",
    },
    {
      title: "优雅美学",
      description: "探索温暖治愈的设计语言，感受生活中的精致与美好",
      href: "/sweet",
      icon: <Heart className="h-8 w-8" />,
      badge: "Elegant",
      gradient: "from-pink-100 via-purple-50 to-yellow-100",
      textColor: "text-rose-600",
      borderColor: "border-rose-300",
      hoverEffect: "hover:border-rose-400 hover:shadow-rose-500/25",
    },
    {
      title: "极简主义",
      description: "通过简洁的设计语言，传达最纯粹的美学理念",
      href: "/minimal",
      icon: <Minus className="h-8 w-8" />,
      badge: "Minimal",
      gradient: "from-gray-50 to-gray-100",
      textColor: "text-gray-800",
      borderColor: "border-gray-300",
      hoverEffect: "hover:border-gray-400 hover:shadow-gray-500/25",
    },
    {
      title: "战术指挥",
      description: "军用级深蓝科技界面，体验专业战术指挥系统",
      href: "/tactical",
      icon: <Radar className="h-8 w-8" />,
      badge: "Tactical",
      gradient: "from-slate-900 via-blue-950 to-slate-900",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      hoverEffect: "hover:border-blue-400/50 hover:shadow-blue-500/25",
    },
    {
      title: "神秘协议",
      description: "量子加密的神秘界面，探索未知的数字维度",
      href: "/nexus",
      icon: <Brain className="h-8 w-8" />,
      badge: "Nexus",
      gradient: "from-black via-indigo-950 to-purple-950",
      textColor: "text-indigo-400",
      borderColor: "border-indigo-500/30",
      hoverEffect: "hover:border-indigo-400/50 hover:shadow-indigo-500/25",
    },
    {
      title: "苹果风格",
      description: "简洁优雅的设计语言，极致的用户体验和人性化交互",
      href: "/apple",
      icon: <Apple className="h-8 w-8" />,
      badge: "Apple",
      gradient: "from-gray-50 via-white to-gray-100",
      textColor: "text-gray-800",
      borderColor: "border-gray-300",
      hoverEffect: "hover:border-gray-500/50 hover:shadow-gray-500/25",
    },
    {
      title: "Web操作系统",
      description: "完整的桌面操作系统体验，可拖拽窗口、多任务处理",
      href: "/os",
      icon: <Monitor className="h-8 w-8" />,
      badge: "WebOS",
      gradient: "from-blue-500 via-purple-600 to-pink-500",
      textColor: "text-white",
      borderColor: "border-blue-400/30",
      hoverEffect: "hover:border-blue-300/50 hover:shadow-blue-400/25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* 主标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" as const, stiffness: 100 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="mb-8"
          >
            <Palette className="h-16 w-16 mx-auto text-indigo-600" />
          </motion.div>
          
          <h1 className="text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            TechStyle
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"
          />
          
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            现代化技术栈实验场
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            探索 Next.js 15, Framer Motion, Tailwind CSS 和 shadcn/ui 的无限可能
          </p>
        </motion.div>

        {/* 风格展示卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {styles.map((style, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={style.href}>
                <Card className={`h-full bg-gradient-to-br ${style.gradient} border-2 ${style.borderColor} ${style.hoverEffect} transition-all duration-300 cursor-pointer overflow-hidden`}>
                  <div className="relative">
                    {/* 卡片背景效果 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg ${style.textColor} bg-white/20 backdrop-blur-sm`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring" as const, stiffness: 400 }}
                        >
                          {style.icon}
                        </motion.div>
                        <Badge 
                          variant="secondary" 
                          className="bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
                        >
                          {style.badge}
                        </Badge>
                      </div>
                      
                      <CardTitle className={`text-2xl font-bold ${style.textColor} group-hover:scale-105 transition-transform duration-300`}>
                        {style.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                        {style.description}
                      </CardDescription>
                      
                      <Button 
                        variant="outline" 
                        className={`w-full ${style.borderColor} ${style.textColor} hover:bg-white/20 backdrop-blur-sm group-hover:scale-105 transition-all duration-300`}
                      >
                        开始体验
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部信息区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <Card className="bg-white/60 backdrop-blur-sm border border-white/50 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                技术栈展示
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {["Next.js 15", "React 19", "Framer Motion", "Tailwind CSS 4", "shadcn/ui", "TypeScript"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-4 py-2 text-sm bg-white/80 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}