"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Flower2, Moon, Sun, Wind, Palette, Feather, Gem } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SweetPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-25 to-amber-50 relative overflow-hidden">
      {/* 柔和的光影背景 */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-rose-200/40 via-pink-100/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-amber-200/30 via-orange-100/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-purple-200/25 via-violet-100/15 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* 微妙的纹理背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,182,193,0.15)_1px,transparent_0)] bg-[size:20px_20px]" />

      {/* 浮动花瓣装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-40 shadow-sm" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className="bg-white/80 border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 backdrop-blur-sm shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回
            </Button>
          </Link>
        </motion.div>

        {/* 优雅的标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring" as const, stiffness: 60 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 inline-block"
          >
            <Flower2 className="h-16 w-16 text-rose-400 mx-auto" strokeWidth={1.5} />
          </motion.div>
          
          <h1 className="text-6xl font-light mb-6 tracking-wide">
            <motion.span
              className="block bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              优雅美学
            </motion.span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-rose-300 to-amber-300 mx-auto mb-8"
          />
          
          <motion.p 
            className="text-xl text-rose-600/80 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            发现生活中的优雅与美好，感受温暖治愈的力量
          </motion.p>
        </motion.div>

        {/* 精致的特性展示 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            {
              icon: <Palette className="h-7 w-7" strokeWidth={1.5} />,
              title: "色彩美学",
              description: "温暖柔和的色彩搭配，营造舒适的视觉体验",
              gradient: "from-rose-400 to-pink-500",
              bgGradient: "from-rose-50 to-pink-50",
              shadowColor: "shadow-rose-200/50",
            },
            {
              icon: <Feather className="h-7 w-7" strokeWidth={1.5} />,
              title: "轻盈质感",
              description: "如羽毛般轻柔的交互，带来愉悦的使用感受",
              gradient: "from-amber-400 to-orange-500",
              bgGradient: "from-amber-50 to-orange-50",
              shadowColor: "shadow-amber-200/50",
            },
            {
              icon: <Moon className="h-7 w-7" strokeWidth={1.5} />,
              title: "宁静时光",
              description: "营造静谧安详的氛围，让心灵得到放松",
              gradient: "from-violet-400 to-purple-500",
              bgGradient: "from-violet-50 to-purple-50",
              shadowColor: "shadow-violet-200/50",
            },
            {
              icon: <Gem className="h-7 w-7" strokeWidth={1.5} />,
              title: "精致细节",
              description: "注重每一个微妙的细节，追求完美的用户体验",
              gradient: "from-emerald-400 to-teal-500",
              bgGradient: "from-emerald-50 to-teal-50",
              shadowColor: "shadow-emerald-200/50",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className={`bg-gradient-to-br ${feature.bgGradient} border-0 ${feature.shadowColor} shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm`}>
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <CardTitle className="text-gray-700 group-hover:text-gray-900 transition-colors text-lg font-medium mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 中央艺术展示区域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="text-center mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white via-rose-50 to-amber-50 border-0 shadow-2xl shadow-rose-200/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
              
              <CardContent className="relative p-16">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="mb-8"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rose-300 via-pink-400 to-amber-400 flex items-center justify-center shadow-xl">
                    <Sun className="h-12 w-12 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
                
                <motion.blockquote 
                  className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light italic mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  "真正的优雅不在于标新立异，而在于被人铭记。"
                </motion.blockquote>
                
                <motion.p 
                  className="text-rose-600 font-medium tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  — Coco Chanel
                </motion.p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* 优雅的 CTA 区域 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-white via-rose-50 to-white border border-rose-200/50 shadow-xl max-w-3xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1),transparent_70%)]" />
            
            <CardContent className="relative p-12">
              <h2 className="text-3xl font-light text-gray-800 mb-6">
                体验优雅之美
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-lg mx-auto">
                在细腻与温暖中，寻找属于你的美好时光
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 hover:from-rose-500 hover:via-pink-600 hover:to-amber-500 text-white font-medium px-12 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  开始美好体验
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 底部装饰线 */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
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