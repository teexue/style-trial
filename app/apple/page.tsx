"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Apple, Smartphone, Laptop, Watch, Headphones, Tv, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ApplePage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const products = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      name: "iPhone",
      tagline: "比以往更强大",
      description: "A17 Pro 芯片。钛金属设计。Pro 级摄像头系统。",
      price: "¥7999 起",
      gradient: "from-slate-100 to-white",
      textGradient: "from-blue-600 to-purple-600",
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      name: "MacBook Pro",
      tagline: "超强性能，超长续航",
      description: "M3 Max 芯片。Liquid Retina XDR 显示屏。",
      price: "¥14999 起",
      gradient: "from-gray-50 to-slate-100",
      textGradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <Watch className="h-8 w-8" />,
      name: "Apple Watch",
      tagline: "健康的未来，现在戴上",
      description: "血氧监测。心电图。睡眠追踪。",
      price: "¥2999 起",
      gradient: "from-red-50 to-pink-50",
      textGradient: "from-red-600 to-pink-600",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      name: "AirPods Pro",
      tagline: "自适应音频",
      description: "主动降噪。透明模式。空间音频。",
      price: "¥1899",
      gradient: "from-indigo-50 to-blue-50",
      textGradient: "from-indigo-600 to-blue-600",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景装饰 */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* 返回按钮 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-8 left-8"
          >
            <Link href="/">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 backdrop-blur-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回
              </Button>
            </Link>
          </motion.div>

          {/* Apple Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <Apple className="h-20 w-20 mx-auto text-gray-800" />
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-thin text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Think Different
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            创新不止于技术，更在于让技术变得人性化
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              了解更多
            </Button>
          </motion.div>
        </div>

        {/* 底部滚动指示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-thin text-gray-900 mb-4 tracking-tight">
              产品家族
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              每一款产品都代表着我们对完美的不懈追求
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${product.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}>
                  <CardHeader className="text-center pb-8 pt-12">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${product.textGradient} flex items-center justify-center text-white shadow-lg`}>
                        {product.icon}
                      </div>
                    </motion.div>
                    
                    <CardTitle className="text-3xl font-thin text-gray-900 mb-2">
                      {product.name}
                    </CardTitle>
                    
                    <p className={`text-lg font-medium bg-gradient-to-r ${product.textGradient} bg-clip-text text-transparent mb-4`}>
                      {product.tagline}
                    </p>
                    
                    <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
                      {product.description}
                    </CardDescription>
                    
                    <div className="text-2xl font-light text-gray-900 mb-6">
                      {product.price}
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition-all duration-300"
                      >
                        立即购买
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 font-medium py-3 rounded-full transition-all duration-300"
                      >
                        了解更多
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-thin text-gray-900 mb-8 tracking-tight">
              设计就是工作原理
            </h2>
            
            <blockquote className="text-2xl font-light text-gray-600 leading-relaxed mb-8 italic">
              "设计不只是看起来如何，感觉如何。设计是工作原理。"
            </blockquote>
            
            <p className="text-lg text-gray-500 mb-12">
              — Steve Jobs
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300"
              >
                探索创新
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <Apple className="h-8 w-8 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 text-sm">
            © 2024 Apple Inc. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
}