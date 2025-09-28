"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Circle, Square, Triangle, Minus } from "lucide-react";
import Link from "next/link";

export default function MinimalPage() {
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
    hidden: { y: 20, opacity: 0 },
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回
            </Button>
          </Link>
        </motion.div>

        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            极简主义
          </h1>
          <div className="w-16 h-0.5 bg-gray-900 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            通过简洁的设计语言，传达最纯粹的美学理念
          </p>
        </motion.div>

        {/* 几何装饰区域 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-24 flex justify-center items-center space-x-8"
        >
          <motion.div
            className="w-16 h-16 border-2 border-gray-300"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="w-16 h-16 border-2 border-gray-400 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-gray-500"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* 特性网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          {[
            {
              icon: <Minus className="h-6 w-6" />,
              title: "少即是多",
              description: "去除多余的装饰，专注于本质的功能与美感",
              number: "01",
            },
            {
              icon: <Circle className="h-6 w-6" />,
              title: "空间感",
              description: "合理运用留白，让内容得到充分的呼吸空间",
              number: "02",
            },
            {
              icon: <Square className="h-6 w-6" />,
              title: "网格系统",
              description: "基于严格的网格系统，创造秩序感与平衡",
              number: "03",
            },
            {
              icon: <Triangle className="h-6 w-6" />,
              title: "几何美学",
              description: "运用基础几何形状，构建简洁而有力的视觉语言",
              number: "04",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-none bg-transparent group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300">
                      <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-gray-400 border-gray-300 font-mono">
                      {feature.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 引用区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-24"
        >
          <blockquote className="text-3xl font-light text-gray-800 max-w-4xl mx-auto leading-relaxed">
            "简单是最高级的复杂。"
          </blockquote>
          <p className="text-gray-500 mt-6 text-lg">— 达·芬奇</p>
        </motion.div>

        {/* CTA 区域 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Card className="border border-gray-200 shadow-sm max-w-3xl mx-auto bg-white">
            <CardContent className="p-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                体验纯粹之美
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-lg mx-auto">
                在繁复的世界中，寻找最简洁的表达方式
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-3 font-normal tracking-wide"
                >
                  开始探索
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}