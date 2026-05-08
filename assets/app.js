// Taiyi Marine - Main JavaScript with Full Site Language Support
(function(){
  'use strict';

  // 1. 语言字典配置 (覆盖所有页面)
  const translations = {
    'zh': {
      // --- 公共部分 (导航栏 & 页脚) ---
      'nav-home': '首页',
      'nav-products': '产品',
      'nav-technology': '技术优势',
      'nav-solutions': '解决方案',
      'nav-cases': '案例',
      'nav-news': '新闻',
      'nav-contact': '联系我们',
      'nav-cta': '获取方案',
      'footer-company': '深圳太一海洋智能科技有限公司',
      'footer-slogan': '驰骋蓝海 · 智享自由',
      'footer-desc': '电动推进 · CFD/EFD · AI 优化 · 自动驾驶 · 无人船',
      'footer-quick': '快速入口',
      'footer-contact': '联系',
      'footer-phone': '电话',
      'footer-email': '邮箱',
      'footer-address': '地址',
      'footer-address-val':'深圳市宝安区西乡街道蚝业社区大铲湾蓝色未来科技园二期1栋202',
      'footer-rights': '版权所有',
      'btn-learn-more': '了解更多',
      'btn-contact': '申请技术交流',
      'btn-get-quote': '获取方案',
      'btn-view-products': '查看产品',
      'btn-view-cases': '查看案例',
      'btn-submit': '提交',
      'btn-subscribe': '立即订阅',

      // --- 首页 (Home) ---
      'home-kicker': '智能船舶系统',
      'home-title': '驰骋蓝海，智享自由',
      'home-subtitle': '全栈自研智能船舶系统：电动推进、船型优化、CFD/EFD分析、AI设计优化、自动驾驶与无人船平台。为您提供从产品到技术再到解决方案的一体化专业服务。',
      'home-pill-1': '电动外机 0.4-10kW',
      'home-pill-2': '螺旋桨设计/制造',
      'home-pill-3': '自动驾驶/无人船',
      'home-pill-4': 'CFD + EFD 实验能力',
      'home-stat-1-title': '工业4.0',
      'home-stat-1-desc': '智能制造与海洋实训平台一体化解决方案',
      'home-stat-2-title': 'CFD / EFD',
      'home-stat-2-desc': '船型、阻力、操纵性专业性能评估',
      'home-stat-3-title': '智能控制',
      'home-stat-3-desc': '先进控制系统与可扩展集成架构',
      'home-stat-4-title': '案例落地',
      'home-stat-4-desc': '文旅船、改造升级、螺旋桨优化成功案例',
      'home-capabilities': '核心能力',
      'home-capabilities-desc': '我们提供从产品设计到系统集成的全方位智能船舶解决方案',
      'home-cap-1': '产品与供应链',
      'home-cap-1-desc': '电动外机、智能船艇与系统集成；提供从选型、适配到交付的一站式服务。',
      'home-cap-1-badge-1': '中小功率',
      'home-cap-1-badge-2': '48/96V',
      'home-cap-1-badge-3': '可定制',
      'home-cap-2': '船体/螺旋桨设计',
      'home-cap-2-desc': '船型优化、螺旋桨设计/制造、性能评估；CFD + EFD 支撑可量化指标。',
      'home-cap-2-badge-1': 'CFD',
      'home-cap-2-badge-2': 'EFD',
      'home-cap-2-badge-3': '优化设计',
      'home-cap-3': '自动驾驶与无人船',
      'home-cap-3-desc': '导航、路径规划、多传感器融合、远程运维；适用于巡检、测绘、教学展示。',
      'home-cap-3-badge-1': 'Autopilot',
      'home-cap-3-badge-2': 'USV',
      'home-cap-3-badge-3': '远程控制',
      'home-products': '产品概览',
      'home-products-desc': '覆盖不同功率和应用场景的智能船舶产品线',
      'home-tech': '技术优势',
      'home-tech-desc': '基于先进计算与实验方法的智能船舶技术',
      'home-tech-1': '性能评估系统',
      'home-tech-1-desc': '船舶运动学、动力学求解，操纵性/耐波性/稳定性/快速性综合评估。',
      'home-tech-2': 'CFD + EFD 融合',
      'home-tech-2-desc': '计算与实验互证，提升预测可信度；支撑外形、桨叶、控制面协同优化。',
      'home-tech-3': 'AI 优化设计',
      'home-tech-3-desc': '参数化建模 + 智能学习，快速探索设计空间，加速从方案到落地。',
      'home-cases': '成功案例',
      'home-cases-desc': '我们为各类客户提供专业的智能船舶解决方案',
      'home-case-1': '螺旋桨设计服务',
      'home-case-1-desc': '设计、制造、测试对比，支持匹配不同船体与动力系统。',
      'home-case-1-badge-1': '设计',
      'home-case-1-badge-2': '制造',
      'home-case-1-badge-3': '测试',
      'home-case-2': '船艇升级/改造',
      'home-case-2-desc': '1kW~300kW 方案升级，适配品牌船型与电推进系统改造。',
      'home-case-2-badge-1': '升级',
      'home-case-2-badge-2': '改造',
      'home-case-2-badge-3': '优化',
      'home-case-3': '水上自行车',
      'home-case-3-desc': '操控灵敏、姿态稳定、户外水域可控；适配文旅运营场景。',
      'home-case-3-badge-1': '文旅',
      'home-case-3-badge-2': '娱乐',
      'home-case-3-badge-3': '运营',
      'home-cta-title': '准备好优化您的船队了吗？',
      'home-cta-desc': '联系太一海洋，获取专业的智能船舶解决方案与技术支持。',
      'btn-contact-us': '立即咨询',

      // --- 产品页 (Products) ---
      'products-subtitle': '中小功率电动外机',
      'products-desc': '覆盖不同功率和应用场景的专业电动推进解决方案',
  'products-showcase-1-title': '高性能推进器系列',
  'products-showcase-1-desc': '全栈自研的先进推进解决方案，满足各类船舶需求',
  'products-showcase-2-title': '整船与系统解决方案',
  'products-showcase-2-desc': '一体化智能船舶平台，创新设计与尖端技术融合',
  'products-showcase-click-hint': '点击查看详情',
  'products-showcase-card-1-title': '电动喷泵推进器',
  'products-showcase-card-1-desc': '全栈自研的高性能船舶用电动喷水推进器，最大推力3kW-44kgf，适合高速无人水面载具',
  'products-showcase-card-1-badge-1': '零排放',
  'products-showcase-card-1-badge-2': '浅水航行',
  'products-showcase-card-1-badge-3': '高速响应',
  'products-showcase-card-2-title': '电动直翼桨推进器',
  'products-showcase-card-2-desc': '代表现代船舶推进与操纵技术的完美结合，360°全方向推力控制，支持动态定位',
  'products-showcase-card-2-badge-1': '360°控制',
  'products-showcase-card-2-badge-2': '高精度',
  'products-showcase-card-2-badge-3': '动态定位',
  'products-showcase-card-3-title': '电动舷外机推进器',
  'products-showcase-card-3-desc': '专为中小型船艇量身定制的高效动力系统，覆盖 T-2 至 T-15，兼顾轻量化、无线操控与静谧零排放航行体验',
  'products-showcase-card-3-badge-1': '轻量防腐',
  'products-showcase-card-3-badge-2': '无线操控',
  'products-showcase-card-3-badge-3': '静音零排',
  'products-showcase-card-4-title': '文旅观光船',
  'products-showcase-card-4-desc': '将尖端科技与水上美学完美融合，专为现代绿色智能景区量身定制，打造极致舒适的水上观光体验',
  'products-showcase-card-4-badge-1': '轻量化设计',
  'products-showcase-card-4-badge-2': '智能操控',
  'products-showcase-card-4-badge-3': '零排放',
  'products-showcase-card-5-title': '无人船',
  'products-showcase-card-5-desc': '高精度智控底座与全景交互船载终端，深度集成AI视觉与大模型辅助决策，实现全自动水上作业',
  'products-showcase-card-5-badge-1': '自主航行',
  'products-showcase-card-5-badge-2': 'AI视觉',
  'products-showcase-card-5-badge-3': '远程操控',
      'products-th-model': '型号',
      'products-th-power': '功率',
      'products-th-voltage': '电压',
      'products-th-battery': '电池配置',
      'products-th-scenario': '适用场景',
      'products-bat-t2': '1.2kWh 内置',
      'products-bat-t5': '4.8kWh 外接',
      'products-bat-t10': '7.2kWh 外接',
      'products-bat-t15': '12kWh 外接',
      'products-bat-t25': '18kWh 外接',
      'products-bat-t40': '24kWh 外接',
      'products-t2': '低速文旅/皮划艇/小艇',
      'products-t5': '中速文旅/小型工作艇',
      'products-t10': '高速/载荷更大船型',
      'products-t15': '更高性能/改造升级',
      'products-t25': '中型工作船/高速艇',
      'products-t40': '商用船/大型文旅船',
      'products-applications': '应用场景',
      'products-app-desc': '满足不同行业和用途的专业船舶电动化需求',
      'products-app-1': '文旅运营船',
      'products-app-1-desc': '低噪音、低维护、续航友好；适用于景区定线观光与体验项目。',
      'products-app-1-badge-1': '低噪音',
      'products-app-1-badge-2': '长续航',
      'products-app-1-badge-3': '易维护',
      'products-app-2': '工作艇/巡检艇',
      'products-app-2-desc': '稳定可靠，适配多种载荷；支持系统集成与远程监控。',
      'products-app-2-badge-1': '稳定可靠',
      'products-app-2-badge-2': '可扩展',
      'products-app-2-badge-3': '远程监控',
      'products-app-3': '电动帆船改造',
      'products-app-3-desc': '从 1kW 到更高功率升级方案；匹配三电与螺旋桨优化。',
      'products-app-3-badge-1': '升级改造',
      'products-app-3-badge-2': '系统优化',
      'products-app-3-badge-3': '性能提升',
      'products-app-4': '冲锋艇/快艇',
      'products-app-4-desc': '高功率输出，快速响应，适用于应急救援和高速巡逻。',
      'products-app-4-badge-1': '高功率',
      'products-app-4-badge-2': '快速响应',
      'products-app-5': '双体文旅船',
      'products-app-5-desc': '稳定平台，宽敞空间，适合水上观光和休闲娱乐。',
      'products-app-5-badge-1': '稳定性',
      'products-app-5-badge-2': '舒适性',
      'products-app-6': '科研监测船',
      'products-app-6-desc': '低干扰动力系统，支持精密仪器搭载和数据采集。',
      'products-app-6-badge-1': '低干扰',
      'products-app-6-badge-2': '高精度',
      'products-capabilities': '产品能力',
      'products-cap-desc': '全面的产品支持和服务体系',
      'products-cap-1-tab': '选型建议',
      'products-cap-2-tab': '配套电池',
      'products-cap-3-tab': '系统集成',
      'products-cap-4-tab': '售后服务',
      'products-cap-1': '专业选型建议',
      'products-cap-1-desc': '提供从船型、载荷、航速目标出发的专业选型建议：电机功率、桨、控制器、电池容量与线束规范一体化配置。',
      'products-cap-1-badge-1': '船型分析',
      'products-cap-1-badge-2': '载荷评估',
      'products-cap-1-badge-3': '航速规划',
      'products-cap-2': '智能电池系统',
      'products-cap-2-desc': '支持 48V/96V/144V 电池包与外接方案，提供完善的电池管理与安全策略建议（充放电、温控、防水等级等）。',
      'products-cap-2-badge-1': '智能管理',
      'products-cap-2-badge-2': '安全保障',
      'products-cap-2-badge-3': '长寿命',
      'products-cap-3': '一体化系统集成',
      'products-cap-3-desc': '支持仪表、控制、传感器、定位与自动驾驶接口集成，面向文旅船、工作艇、无人船提供定制化交付。',
      'products-cap-3-badge-1': '接口标准化',
      'products-cap-3-badge-2': '定制开发',
      'products-cap-3-badge-3': '系统测试',
      'products-cap-4': '完善售后服务',
      'products-cap-4-desc': '提供安装指导、操作培训、定期维护和技术支持，确保产品长期稳定运行。',
      'products-cap-4-badge-1': '技术培训',
      'products-cap-4-badge-2': '定期维护',
      'products-cap-4-badge-3': '远程支持',
      'products-cap-hero': '核心能力<br>与特性',
      'products-cap-block-1-label': '引擎可靠性',
      'products-cap-block-1-title': '故障安全架构',
      'products-cap-block-1-desc': '每套T系列单元均配备冗余冷却回路和双绕组定子配置，确保即使在关键硬件故障事件中也能维持推进能力。',
      'products-cap-block-2-label': '智能控制',
      'products-cap-block-2-title': '神经自适应控制',
      'products-cap-block-2-desc': '我们专有的AI控制器通过实时分析船体振动和水阻力来调整扭矩矢量，效率提升高达18%。',
      'products-cap-icon-1-title': '模块化接口',
      'products-cap-icon-1-desc': '即插即用架构，可快速集成至现有桥接系统和第三方传感器。',
      'products-cap-icon-2-title': '精密制造',
      'products-cap-icon-2-desc': '每个部件均采用航空航天级铝合金和钛合金CNC精密加工，确保极致耐用性。',
      'products-cap-icon-3-title': '环保生态',
      'products-cap-icon-3-desc': '100%可回收设计，全生命周期零润滑油泄漏，守护海洋生态系统。',
      'products-cap-icon-4-title': '开放SDK',
      'products-cap-icon-4-desc': '为船队管理者和自主软件开发者提供全面的软件开发工具包。',
      'products-features': '产品特点',
      'products-features-desc': '我们的产品在设计、性能和可靠性方面的核心优势',
      'products-feature-1': '高效节能',
      'products-feature-1-desc': '采用高效电机和优化控制算法，相比传统燃油动力节能30%以上，运营成本大幅降低。',
      'products-feature-1-badge-1': '高效电机',
      'products-feature-1-badge-2': '智能控制',
      'products-feature-1-badge-3': '节能30%+',
      'products-feature-2': '环保静音',
      'products-feature-2-desc': '零排放，运行噪音低于60分贝，为水域环境和用户体验提供最佳保障。',
      'products-feature-2-badge-1': '零排放',
      'products-feature-2-badge-2': '低噪音',
      'products-feature-2-badge-3': '环保认证',
      'products-feature-3': '智能控制',
      'products-feature-3-desc': '集成智能控制系统，支持远程监控、故障诊断和OTA升级，维护简便。',
      'products-feature-3-badge-1': '远程监控',
      'products-feature-3-badge-2': '故障诊断',
      'products-feature-3-badge-3': 'OTA升级',
      'products-feature-4': '安全可靠',
      'products-feature-4-desc': '多重安全保护机制，IP67防护等级，适应各种恶劣水域环境。',
      'products-feature-4-badge-1': '多重保护',
      'products-feature-4-badge-2': 'IP67防护',
      'products-feature-4-badge-3': '恶劣环境适应',
      'products-tab-outboard': '电动外机',
      'products-tab-tourism': '文旅/娱乐',
      'products-tab-design': '设计服务',
      'products-outboard-title': '中小功率电动外机',
      'products-outboard-desc': '覆盖 0.4-10kW 功率范围，支持 48V/96V 电压，适用于休闲船、工作艇、改造升级等多种场景。',
      'products-outboard-badge-1': '低噪',
      'products-outboard-badge-2': '易维护',
      'products-outboard-badge-3': '高效率',
      'products-tourism-title': '文旅船艇解决方案',
      'products-tourism-desc': '低功率慢行文旅船：续航长、稳定性强；高速娱乐船：体验感强，支持智能驾驶辅助。',
      'products-tourism-badge-1': '文旅运营',
      'products-tourism-badge-2': '体验场景',
      'products-tourism-badge-3': '系统集成',
      'products-design-title': '船体优化 & 螺旋桨设计',
      'products-design-desc': '输入船体图纸/性能需求，输出螺旋桨与三电配置方案；支持 CFD、EFD 验证闭环。',
      'products-design-badge-1': '阻力/兴波',
      'products-design-badge-2': '操纵性',
      'products-design-badge-3': '效率提升',

      // --- 案例页 (Cases) ---
      'cases-design-title': '船艇与螺旋桨设计服务',
      'cases-design-desc': '为各类船舶提供专业的螺旋桨和船体设计优化服务',
      'cases-design-1': '螺旋桨设计',
      'cases-design-1-desc': '参数化设计 + 性能预测 + 试验验证；支持不同船型与动力匹配。',
      'cases-design-1-badge-1': '效率提升',
      'cases-design-1-badge-2': '降噪优化',
      'cases-design-1-badge-3': '定制设计',
      'cases-design-2': '船型优化',
      'cases-design-2-desc': '阻力、耐波、操纵性综合优化；支持快速方案对比与工程交付。',
      'cases-design-2-badge-1': 'CFD分析',
      'cases-design-2-badge-2': 'EFD验证',
      'cases-design-2-badge-3': '综合优化',
      'cases-design-3': '实船验证',
      'cases-design-3-desc': '结合实船测试与数据对比，提供可量化结果呈现与改进建议。',
      'cases-design-3-badge-1': '对比报告',
      'cases-design-3-badge-2': '工程落地',
      'cases-design-3-badge-3': '数据验证',
      'cases-design-4': '典型案例：某文旅船螺旋桨优化',
      'cases-design-4-desc': '通过CFD分析和实船测试，为某景区文旅船设计新型高效螺旋桨，实现以下效果：',
      'cases-design-4-effect-1': '推进效率提升15%',
      'cases-design-4-effect-2': '运行噪音降低8分贝',
      'cases-design-4-effect-3': '续航时间延长20%',
      'cases-design-4-effect-4': '维护周期延长至原来的2倍',
      'cases-upgrade-title': '船艇升级改造',
      'cases-upgrade-desc': '为各类船舶提供电动化升级和性能优化改造服务',
      'cases-upgrade-1': '电动帆船改造方案',
      'cases-upgrade-1-desc': '低功率输出满足长期使用需求；配置电池与系统集成，适用于日常训练和运营。',
      'cases-upgrade-1-badge-1': '低功率',
      'cases-upgrade-1-badge-2': '长续航',
      'cases-upgrade-1-badge-3': '系统集成',
      'cases-upgrade-2': '高速船螺旋桨升级',
      'cases-upgrade-2-desc': '最大航速提升、效率优化与测试对比，面向性能需求进行专项优化。',
      'cases-upgrade-2-badge-1': '航速提升',
      'cases-upgrade-2-badge-2': '效率优化',
      'cases-upgrade-2-badge-3': '专项优化',
      'cases-upgrade-3': '1kW升级方案',
      'cases-upgrade-3-desc': '小型船舶电动化改造，适用于休闲船和训练船。',
      'cases-upgrade-3-badge-1': '小型船',
      'cases-upgrade-3-badge-2': '休闲船',
      'cases-upgrade-4': '6kW升级方案',
      'cases-upgrade-4-desc': '中型工作船和文旅船电动化改造。',
      'cases-upgrade-4-badge-1': '中型船',
      'cases-upgrade-4-badge-2': '工作船',
      'cases-upgrade-5': '300kW升级方案',
      'cases-upgrade-5-desc': '大型船舶和高速船电动化改造。',
      'cases-upgrade-5-badge-1': '大型船',
      'cases-upgrade-5-badge-2': '高速船',
      'cases-bike-title': '水上自行车',
      'cases-bike-desc': '创新的水上娱乐设备，提供独特的户外体验',
      'cases-bike-1': '产品亮点',
      'cases-bike-1-desc': '狭窄与浅水域适配、转向灵敏、姿态切换稳定、户外水域可控性强。',
      'cases-bike-1-badge-1': '文旅项目',
      'cases-bike-1-badge-2': '户外体验',
      'cases-bike-1-badge-3': '可运营',
      'cases-bike-2': '应用场景',
      'cases-bike-2-scenario-1': '景区水上娱乐项目',
      'cases-bike-2-scenario-2': '水上运动培训',
      'cases-bike-2-scenario-3': '水上休闲体验',
      'cases-bike-2-scenario-4': '团队建设活动',
      'cases-bike-3': '室内泳池测试',
      'cases-bike-3-desc': '在受控环境中进行性能测试和安全验证。',
      'cases-bike-3-badge-1': '性能测试',
      'cases-bike-3-badge-2': '安全验证',
      'cases-bike-3-badge-3': '受控环境',
      'cases-bike-4': '户外水域应用',
      'cases-bike-4-desc': '在实际水域环境中验证产品性能和可靠性。',
      'cases-bike-4-badge-1': '实际水域',
      'cases-bike-4-badge-2': '性能验证',
      'cases-bike-4-badge-3': '可靠性',
      'cases-usv-title': '无人船方案',
      'cases-usv-desc': '先进的无人自主航行船舶解决方案',
      'cases-usv-1': '任务规划',
      'cases-usv-1-desc': '设定航线/目标点，自动执行与回传，支持多任务切换。',
      'cases-usv-1-badge-1': '航线规划',
      'cases-usv-1-badge-2': '自动执行',
      'cases-usv-1-badge-3': '多任务',
      'cases-usv-2': '自主航行',
      'cases-usv-2-desc': '定位与航向控制闭环，可扩展感知与避障模块。',
      'cases-usv-2-badge-1': '定位控制',
      'cases-usv-2-badge-2': '航向控制',
      'cases-usv-2-badge-3': '避障模块',
      'cases-usv-3': '展示/教学',
      'cases-usv-3-desc': '室内展示与水域演示兼容，适用于高校、展会与科普场景。',
      'cases-usv-3-badge-1': '高校教学',
      'cases-usv-3-badge-2': '展会展示',
      'cases-usv-3-badge-3': '科普教育',
      'cases-usv-4': '双体无人船验证',
      'cases-usv-4-desc': '双体船型提供更高稳定性，适用于复杂水域环境。',
      'cases-usv-4-badge-1': '双体船型',
      'cases-usv-4-badge-2': '高稳定性',
      'cases-usv-4-badge-3': '复杂水域',
      'cases-usv-5': '成功应用于某水域巡检项目，实现24小时不间断监测。',
      'cases-brand-title': '品牌船型改造验证',
      'cases-brand-desc': '为知名船型提供电动化改造和性能优化',
      'cases-brand-1': '品牌A帆船改造',
      'cases-brand-1-desc': '为该品牌帆船提供电动辅助动力系统，提升操控性和便利性。',
      'cases-brand-1-badge-1': '辅助动力',
      'cases-brand-1-badge-2': '操控性提升',
      'cases-brand-2': '品牌B工作艇升级',
      'cases-brand-2-desc': '工作艇电动化改造，降低运营成本和维护工作量。',
      'cases-brand-2-badge-1': '成本降低',
      'cases-brand-2-badge-2': '维护简化',
      'cases-brand-3': '品牌C快艇优化',
      'cases-brand-3-desc': '高速艇性能优化，提升航速和燃油效率。',
      'cases-brand-3-badge-1': '航速提升',
      'cases-brand-3-badge-2': '效率优化',

      // --- 解决方案页 (Solutions) ---
      'solutions-electrification-title': '船舶电动化解决方案',
      'solutions-electrification-desc': '覆盖"选型 → 三电 → 螺旋桨匹配 → 测试验证 → 交付运维"的完整闭环',
      'solutions-type-a': 'Type A（≤1kW）',
      'solutions-type-a-desc': '轻量休闲船、皮划艇、桨板动力等场景；低成本快速部署。',
      'solutions-type-a-badge-1': '轻量化',
      'solutions-type-a-badge-2': '快速部署',
      'solutions-type-a-badge-3': '低成本',
      'solutions-type-b': 'Type B（1–10kW）',
      'solutions-type-b-desc': '文旅船、工作艇、改造升级主力区间；48/96V 方案灵活。',
      'solutions-type-b-badge-1': '文旅船',
      'solutions-type-b-badge-2': '工作艇',
      'solutions-type-b-badge-3': '改造升级',
      'solutions-type-c': 'Type C/D（更高功率）',
      'solutions-type-c-desc': '面向更大船型与更高航速目标；可结合 CFD/EFD 进行系统级优化。',
      'solutions-type-c-badge-1': '大型船',
      'solutions-type-c-badge-2': '高航速',
      'solutions-type-c-badge-3': '系统优化',
      'solutions-process': '电动化改造流程',
      'solutions-process-desc': '需求分析 → 方案设计 → 设备选型 → 安装调试 → 测试验证 → 培训交付',
      'solutions-process-badge-1': '6步流程',
      'solutions-process-badge-2': '标准化',
      'solutions-process-badge-3': '可追溯',
      'solutions-verification': '性能验证服务',
      'solutions-verification-desc': '实船测试、数据分析、性能对比、优化建议、验收报告。',
      'solutions-verification-badge-1': '实船测试',
      'solutions-verification-badge-2': '数据分析',
      'solutions-verification-badge-3': '验收报告',
      'solutions-autopilot-title': '自动驾驶 & 船机服务集成',
      'solutions-autopilot-desc': '先进的船舶自动驾驶系统与智能化集成方案',
      'solutions-autopilot-1': '自动驾驶能力',
      'solutions-autopilot-1-desc': '路径规划、目标跟踪、避障与航向控制；支持人机协同与远程控制模式切换。',
      'solutions-autopilot-1-badge-1': '路径规划',
      'solutions-autopilot-1-badge-2': '避障控制',
      'solutions-autopilot-1-badge-3': '模式切换',
      'solutions-autopilot-2': '系统集成',
      'solutions-autopilot-2-desc': '对接电机驱动、传感器、定位、仪表与通信链路；面向工程交付的接口标准化。',
      'solutions-autopilot-2-badge-1': '接口标准化',
      'solutions-autopilot-2-badge-2': '模块化',
      'solutions-autopilot-2-badge-3': '可扩展',
      'solutions-autopilot-3': '多传感器融合',
      'solutions-autopilot-3-desc': 'GPS、IMU、雷达、摄像头等多传感器数据融合，提高环境感知精度。',
      'solutions-autopilot-4': '人机交互界面',
      'solutions-autopilot-4-desc': '直观的操控界面，支持触摸屏操作和移动端远程控制。',
      'solutions-autopilot-5': '云端服务',
      'solutions-autopilot-5-desc': '船队管理、数据存储、远程升级、智能分析等云端服务。',
      'solutions-usv-title': '无人船方案',
      'solutions-usv-desc': '多场景无人自主航行船舶解决方案',
      'solutions-usv-1': '远程操控',
      'solutions-usv-1-desc': '替代人工接近危险区域；支持任务规划、状态回传与风险控制。',
      'solutions-usv-1-badge-1': '危险作业',
      'solutions-usv-1-badge-2': '远程控制',
      'solutions-usv-1-badge-3': '风险控制',
      'solutions-usv-2': '自主航行',
      'solutions-usv-2-desc': '基于目标点与 GPS 航线执行；可扩展视觉/雷达等感知。',
      'solutions-usv-2-badge-1': 'GPS导航',
      'solutions-usv-2-badge-2': '自主执行',
      'solutions-usv-2-badge-3': '避障模块',
      'solutions-usv-3': '多任务载荷',
      'solutions-usv-3-desc': '巡检、测绘、科研教学、展示演示；按需求扩展接口与结构。',
      'solutions-usv-3-badge-1': '任务定制',
      'solutions-usv-3-badge-2': '接口扩展',
      'solutions-usv-3-badge-3': '多用途',
      'solutions-usv-4': '应用场景',
      'solutions-usv-4-desc': '水域巡检、环境监测、水下测绘、科研实验、安防巡逻、应急救援等。',
      'solutions-usv-4-badge-1': '水域巡检',
      'solutions-usv-4-badge-2': '环境监测',
      'solutions-usv-4-badge-3': '水下测绘',
      'solutions-usv-5': '成功应用于某水域巡检项目，实现24小时不间断监测。',
      'solutions-factory-title': '工厂与供应链优势',
      'solutions-factory-desc': '完善的制造体系和供应链管理',
      'solutions-factory-1': '制造与验证',
      'solutions-factory-1-desc': '从加工、装配、检测到出具实验报告；强调工程化与交付可靠性。',
      'solutions-factory-1-badge-1': 'CNC加工',
      'solutions-factory-1-badge-2': '精密装配',
      'solutions-factory-1-badge-3': '严格检测',
      'solutions-factory-2': '实训场地',
      'solutions-factory-2-desc': '专业的水域测试场地，支持各种环境下的船舶性能测试。',
      'solutions-factory-3': '螺旋桨制造',
      'solutions-factory-3-desc': '先进的铸造车间，支持定制化螺旋桨设计和生产。',
      'solutions-factory-4': '检测实验室',
      'solutions-factory-4-desc': '完善的检测设备和实验室，确保产品性能和质量。',
      'solutions-industry-title': '行业解决方案',
      'solutions-industry-desc': '针对不同行业的定制化解决方案',
      'solutions-industry-1': '文旅行业',
      'solutions-industry-1-desc': '景区观光船、水上娱乐设施、特色水上项目等。',
      'solutions-industry-1-badge-1': '观光船',
      'solutions-industry-1-badge-2': '娱乐设施',
      'solutions-industry-1-badge-3': '特色项目',
      'solutions-industry-2': '公共事业',
      'solutions-industry-2-desc': '水域巡检、环境监测、应急救援、安防巡逻等。',
      'solutions-industry-2-badge-1': '水域巡检',
      'solutions-industry-2-badge-2': '环境监测',
      'solutions-industry-2-badge-3': '应急救援',
      'solutions-industry-3': '科研教育',
      'solutions-industry-3-desc': '海洋研究、教学实验、科普展示、技术培训等。',
      'solutions-industry-3-badge-1': '海洋研究',
      'solutions-industry-3-badge-2': '教学实验',
      'solutions-industry-3-badge-3': '科普展示',

      // --- 技术优势页 (Technology) ---
      'tech-eval-title': '船舶性能评估方法',
      'tech-eval-desc': '基于先进计算方法的船舶综合性能评估体系',
      'tech-eval-1': '综合评估链路',
      'tech-eval-1-desc': '运动学求解 → 动力学求解 → 自动驾驶控制 → 阻力/兴波/粘滞阻力分析 → 操纵性/耐波性/稳定性/快速性指标输出。',
      'tech-eval-badge-1': '操纵性',
      'tech-eval-badge-2': '耐波性',
      'tech-eval-badge-3': '稳定性',
      'tech-eval-badge-4': '快速性',
      'tech-eval-2': '运动学求解',
      'tech-eval-2-desc': '基于六自由度运动方程，精确计算船舶在各种海况下的运动响应。',
      'tech-eval-3': '动力学求解',
      'tech-eval-3-desc': '考虑流体动力、惯性力和环境力，进行船舶动力学特性分析。',
      'tech-eval-4': '控制系统设计',
      'tech-eval-4-desc': '基于现代控制理论，设计自动驾驶和运动控制系统。',
      'tech-cfd-title': 'CFD / EFD 技术与 AI 融合',
      'tech-cfd-desc': '计算流体力学与实验流体力学相结合，AI技术赋能优化设计',
      'tech-cfd-1': 'CFD（计算流体力学）',
      'tech-cfd-1-desc': '用于快速评估船型阻力、尾流场、桨后流动与推进效率，支撑形状优化迭代。',
      'tech-cfd-1-badge-1': '阻力分析',
      'tech-cfd-1-badge-2': '流场模拟',
      'tech-cfd-1-badge-3': '效率评估',
      'tech-cfd-2': 'EFD（实验流体力学）',
      'tech-cfd-2-desc': '通过拖曳、静水/海边测试与对比验证，提升预测可信度与工程可交付性。',
      'tech-cfd-2-badge-1': '拖曳试验',
      'tech-cfd-2-badge-2': '实船测试',
      'tech-cfd-2-badge-3': '数据验证',
      'tech-cfd-3': 'AI 代理优化',
      'tech-cfd-3-desc': '基于数据与仿真结果训练优化器，自动探索参数空间，提高收敛速度与方案质量。',
      'tech-cfd-3-badge-1': '参数优化',
      'tech-cfd-3-badge-2': '智能学习',
      'tech-cfd-3-badge-3': '快速收敛',
      'tech-control-title': '基于 AI 的控制面装置设计',
      'tech-control-desc': '智能化控制面参数优化与翼型库管理',
      'tech-control-1': '参数化建模',
      'tech-control-1-desc': '将控制面几何、安装角、位置与约束条件参数化，便于优化器快速迭代搜索。',
      'tech-control-1-badge-1': '几何参数化',
      'tech-control-1-badge-2': '约束建模',
      'tech-control-2': '多目标优化',
      'tech-control-2-desc': '以阻力、升力、稳态与动态响应为目标，结合工艺可制造性约束，输出可落地方案。',
      'tech-control-2-badge-1': '多目标',
      'tech-control-2-badge-2': '约束优化',
      'tech-control-2-badge-3': '可制造性',
      'tech-control-3': '翼型库管理',
      'tech-control-3-desc': '建立标准化翼型数据库，支持快速检索、对比和参数化调整。',
      'tech-control-3-badge-1': '数据库',
      'tech-control-3-badge-2': '标准化',
      'tech-control-3-badge-3': '参数调整',
      'tech-motor-title': '电机设计与电机驱动设计',
      'tech-motor-desc': '面向海洋环境的电机系统设计与驱动技术',
      'tech-motor-1': '电机本体设计',
      'tech-motor-1-desc': '面向海洋工况，结合防水、散热与可靠性设计，支持定制转速/扭矩曲线。',
      'tech-motor-1-badge-1': '防水设计',
      'tech-motor-1-badge-2': '散热优化',
      'tech-motor-1-badge-3': '可靠性',
      'tech-motor-2': 'FOC 控制与算法',
      'tech-motor-2-desc': '实现稳定的无刷电机控制，支持 Back-EMF、HFI 等关键技术路径。',
      'tech-motor-2-badge-1': 'FOC控制',
      'tech-motor-2-badge-2': 'Back-EMF',
      'tech-motor-2-badge-3': 'HFI技术',
      'tech-motor-3': '驱动板迭代',
      'tech-motor-3-desc': '第一代 → 第二代 → 第三代（测试版）路线，面向成本、性能、可维护性迭代。',
      'tech-motor-3-badge-1': '成本优化',
      'tech-motor-3-badge-2': '性能提升',
      'tech-motor-3-badge-3': '可维护性',
      'tech-motor-4': '热管理系统',
      'tech-motor-4-desc': '高效热设计确保电机在长时间高负载下稳定运行。',
      'tech-motor-4-badge-1': '热仿真',
      'tech-motor-4-badge-2': '冷却系统',
      'tech-motor-4-badge-3': '温度监控',
      'tech-motor-5': '故障诊断系统',
      'tech-motor-5-desc': '实时监测电机状态，提前预警潜在故障，提高系统可靠性。',
      'tech-motor-5-badge-1': '状态监测',
      'tech-motor-5-badge-2': '故障预警',
      'tech-motor-5-badge-3': '健康管理',
      'tech-intelligent-title': '智能控制与系统集成',
      'tech-intelligent-desc': '先进的船舶控制系统与集成技术',
      'tech-intelligent-1': '自动驾驶系统',
      'tech-intelligent-1-desc': '基于多传感器融合的自动驾驶算法，支持路径规划、避障和自主航行。',
      'tech-intelligent-1-badge-1': '传感器融合',
      'tech-intelligent-1-badge-2': '路径规划',
      'tech-intelligent-1-badge-3': '自主航行',
      'tech-intelligent-2': '远程监控系统',
      'tech-intelligent-2-desc': '实时监控船舶状态，支持远程控制和数据回传。',
      'tech-intelligent-2-badge-1': '实时监控',
      'tech-intelligent-2-badge-2': '远程控制',
      'tech-intelligent-2-badge-3': '数据回传',
      'tech-intelligent-3': '能量管理系统',
      'tech-intelligent-3-desc': '智能分配和优化能源使用，延长续航时间。',
      'tech-intelligent-3-badge-1': '能源优化',
      'tech-intelligent-3-badge-2': '智能分配',
      'tech-intelligent-3-badge-3': '续航延长',

      // --- 新闻页 (News) ---
      'news-title': '新闻中心',
      'news-desc': '了解太一海洋最新动态、技术进展和行业资讯',
      'news-category-tech': '技术突破',
      'news-title-1': '太一海洋发布新一代高效电动舷外机',
      'news-excerpt-1': '太一海洋近日成功研发并推出新一代高效电动舷外机系列产品。',
      'news-tag-product': '电动外机',
      'news-tag-tech': '技术创新',
      'news-category-case': '成功案例',
      'news-title-2': '太一海洋为西湖景区提供电动观光船改造方案',
      'news-excerpt-2': '杭州西湖景区与太一海洋合作，完成首批10艘观光船电动化改造。',
      'news-tag-culture': '文旅船',
      'news-tag-retrofit': '改造案例',
      'news-category-industry': '行业动态',
      'news-title-3': '船舶电动化趋势加速，太一海洋受邀参加国际海事论坛',
      'news-excerpt-3': '在近日举办的国际海事技术论坛上，太一海洋技术总监分享了公司最新成果。',
      'news-tag-forum': '行业论坛',
      'news-end': '已显示全部内容',
      'news-subscribe-title': '订阅新闻动态',
      'news-subscribe-desc': '获取太一海洋最新产品信息和技术动态',
      'news-subscribe-placeholder': '请输入您的邮箱',
      'news-subscribe-privacy': '我们尊重您的隐私，不会共享您的信息',

      // --- 联系页 (Contact) ---
      'contact-title': '联系我们',
      'contact-desc': '提交需求，我们将根据船型、功率、航速目标、运营场景为您提供专业的电动化方案建议。',
      'contact-form-title': '需求表单',
      'contact-form-desc': '请填写以下信息，我们的专家团队将为您提供定制化方案',
      'contact-form-name': '您的姓名 *',
      'contact-form-name-ph': '请输入您的姓名',
      'contact-form-phone': '联系电话 *',
      'contact-form-phone-ph': '请输入联系电话',
      'contact-form-email': '电子邮箱 *',
      'contact-form-email-ph': '请输入电子邮箱',
      'contact-form-company': '公司/单位',
      'contact-form-company-ph': '请输入公司或单位名称',
      'contact-form-boat': '船型信息',
      'contact-form-boat-ph': '船型/吨位/长度',
      'contact-form-power': '功率需求',
      'contact-form-power-ph': '请选择功率需求',
      'contact-form-power-1': '≤1kW',
      'contact-form-power-2': '1-10kW',
      'contact-form-power-3': '10-50kW',
      'contact-form-power-4': '50-100kW',
      'contact-form-power-5': '100kW以上',
      'contact-form-requirements': '详细需求 *',
      'contact-form-requirements-ph': '请详细描述您的需求：航速、续航、应用场景、是否改造、是否需要自动驾驶等',
      'contact-form-submit': '提交需求',
      'contact-info-title': '联系我们',
      'contact-info-desc': '获取最新产品信息和技术支持',
      'contact-info-company-title': '公司信息',
      'contact-info-company': '深圳太一海洋智能科技有限公司',
      'contact-info-phone': '电话',
      'contact-info-email': '邮箱',
      'contact-info-address': '地址',
      'contact-info-worktime': '工作时间',
      'contact-info-worktime-val': '周一至周五 9:00-18:00',
      'contact-follow-title': '关注我们',
      'contact-follow-qrcode': '微信公众号二维码（待定）',
      'contact-follow-scan': '扫码关注微信公众号',
      'contact-follow-desc': '获取最新产品信息和技术动态',
      'contact-process-title': '服务流程',
      'contact-process-desc': '从需求沟通到项目交付的完整服务链路',
      'contact-process-1': '需求沟通',
      'contact-process-1-desc': '详细了解您的船型、功率需求、航速目标与应用场景',
      'contact-process-2': '方案设计',
      'contact-process-2-desc': '定制化电动化方案设计，包含三电匹配与系统集成方案',
      'contact-process-3': '实施交付',
      'contact-process-3-desc': '产品交付、安装调试、操作培训与技术支持',
      'contact-process-4': '测试验证',
      'contact-process-4-desc': '实船性能测试，确保满足设计要求与安全标准',
      'contact-process-5': '优化调整',
      'contact-process-5-desc': '根据测试结果进行系统优化，实现最佳性能表现',
      'contact-process-6': '持续服务',
      'contact-process-6-desc': '提供定期维护、远程支持与系统升级服务',
      'contact-start-project': '开始您的项目',
    },
    'en': {
      // --- Common ---
      'nav-home': 'Home',
      'nav-products': 'Products',
      'nav-technology': 'Technology',
      'nav-solutions': 'Solutions',
      'nav-cases': 'Cases',
      'nav-news': 'News',
      'nav-contact': 'Contact',
      'nav-cta': 'Get Quote',
      'footer-company': 'Taiyi Marine Intelligence Technology Co., Ltd.',
      'footer-slogan': 'Ride the Blue Ocean · Enjoy Freedom',
      'footer-desc': 'Electric Propulsion · CFD/EFD · AI Optimization · Autopilot · USV',
      'footer-quick': 'Quick Links',
      'footer-contact': 'Contact',
      'footer-phone': 'Phone',
      'footer-email': 'Email',
      'footer-address': 'Address',
      'footer-address-val':'Room 202, Building 1, Phase II, Blue Future Science Park, Dachan Bay, Xixiang Street, Baoan District, Shenzhen',
      'footer-rights': 'All Rights Reserved',
      'btn-learn-more': 'Learn More',
      'btn-contact': 'Tech Exchange',
      'btn-get-quote': 'Get Quote',
      'btn-view-products': 'View Products',
      'btn-view-cases': 'View Cases',
      'btn-submit': 'Submit',
      'btn-subscribe': 'Subscribe',

      // --- Home ---
      'home-kicker': 'Intelligent Marine Systems',
      'home-title': 'Ride the Blue Ocean, Enjoy Freedom',
      'home-subtitle': 'Full-stack self-developed intelligent marine systems: Electric propulsion, hull optimization, CFD/EFD analysis, AI design optimization, autopilot & USV platforms.',
      'home-pill-1': 'Electric Outboard 0.4-10kW',
      'home-pill-2': 'Propeller Design/Mfg',
      'home-pill-3': 'Autopilot / USV',
      'home-pill-4': 'CFD + EFD Lab',
      'home-stat-1-title': 'Industry 4.0',
      'home-stat-1-desc': 'Integrated solution for intelligent manufacturing & marine training',
      'home-stat-2-title': 'CFD / EFD',
      'home-stat-2-desc': 'Pro performance evaluation for hull, resistance & maneuverability',
      'home-stat-3-title': 'Smart Control',
      'home-stat-3-desc': 'Advanced control systems & scalable integration architecture',
      'home-stat-4-title': 'Success Cases',
      'home-stat-4-desc': 'Tourism boats, retrofits, propeller optimization',
      'home-capabilities': 'Core Capabilities',
      'home-capabilities-desc': 'We provide comprehensive intelligent marine solutions from design to integration',
      'home-cap-1': 'Product & Supply Chain',
      'home-cap-1-desc': 'Electric outboards, smart boats & system integration; One-stop service from selection to delivery.',
      'home-cap-1-badge-1': 'Small-Med Power',
      'home-cap-1-badge-2': '48/96V',
      'home-cap-1-badge-3': 'Customizable',
      'home-cap-2': 'Hull & Propeller Design',
      'home-cap-2-desc': 'Hull optimization, propeller design/mfg, performance eval; CFD + EFD supported.',
      'home-cap-2-badge-1': 'CFD',
      'home-cap-2-badge-2': 'EFD',
      'home-cap-2-badge-3': 'Optimization',
      'home-cap-3': 'Autopilot & USV',
      'home-cap-3-desc': 'Navigation, path planning, sensor fusion, remote ops; For inspection, survey, education.',
      'home-cap-3-badge-1': 'Autopilot',
      'home-cap-3-badge-2': 'USV',
      'home-cap-3-badge-3': 'Remote Control',
      'home-products': 'Product Overview',
      'home-products-desc': 'Intelligent marine product lines covering various powers and scenarios',
      'home-tech': 'Tech Advantages',
      'home-tech-desc': 'Intelligent marine technology based on advanced computing and experiments',
      'home-tech-1': 'Performance Eval System',
      'home-tech-1-desc': 'Kinematics, dynamics solving, comprehensive eval of maneuverability/seakeeping/stability.',
      'home-tech-2': 'CFD + EFD Fusion',
      'home-tech-2-desc': 'Comp & Exp mutual verification to improve credibility; Supporting synergistic optimization.',
      'home-tech-3': 'AI Optimization',
      'home-tech-3-desc': 'Parametric modeling + intelligent learning to explore design space and accelerate delivery.',
      'home-cases': 'Success Cases',
      'home-cases-desc': 'Professional intelligent marine solutions for various clients',
      'home-case-1': 'Propeller Design Service',
      'home-case-1-desc': 'Design, mfg, test comparison, supporting matching different hulls & powertrains.',
      'home-case-1-badge-1': 'Design',
      'home-case-1-badge-2': 'Manufacturing',
      'home-case-1-badge-3': 'Testing',
      'home-case-2': 'Boat Upgrade/Retrofit',
      'home-case-2-desc': '1kW~300kW upgrade schemes, adapting brand models & electric propulsion retrofits.',
      'home-case-2-badge-1': 'Upgrade',
      'home-case-2-badge-2': 'Retrofit',
      'home-case-2-badge-3': 'Optimize',
      'home-case-3': 'Water Bike',
      'home-case-3-desc': 'Agile handling, stable posture, controllable in outdoor waters; Suitable for tourism ops.',
      'home-case-3-badge-1': 'Tourism',
      'home-case-3-badge-2': 'Entertainment',
      'home-case-3-badge-3': 'Operations',
      'home-cta-title': 'Ready to Optimize Your Fleet?',
      'home-cta-desc': 'Contact Taiyi Marine for professional intelligent ship solutions and technical support.',
      'btn-contact-us': 'Contact Us',

      // --- Products ---
      'products-subtitle': 'Small-Medium Power Outboards',
      'products-desc': 'Professional electric propulsion solutions covering various powers and scenarios',
  'products-showcase-1-title': 'High-Performance Thruster Series',
  'products-showcase-1-desc': 'Advanced full-stack self-developed propulsion solutions for diverse vessel demands',
  'products-showcase-2-title': 'Vessel & Integrated System Solutions',
  'products-showcase-2-desc': 'An integrated intelligent vessel platform combining innovative design and cutting-edge technologies',
  'products-showcase-click-hint': 'Click for details',
  'products-showcase-card-1-title': 'Electric Water-Jet Thruster',
  'products-showcase-card-1-desc': 'A full-stack high-performance electric water-jet thruster with up to 3kW-44kgf thrust, ideal for high-speed USVs',
  'products-showcase-card-1-badge-1': 'Zero Emission',
  'products-showcase-card-1-badge-2': 'Shallow-Water Ready',
  'products-showcase-card-1-badge-3': 'Fast Response',
  'products-showcase-card-2-title': 'Electric Voith-Schneider Thruster',
  'products-showcase-card-2-desc': 'A modern blend of propulsion and maneuvering with 360° omnidirectional thrust control and dynamic positioning support',
  'products-showcase-card-2-badge-1': '360° Control',
  'products-showcase-card-2-badge-2': 'High Precision',
  'products-showcase-card-2-badge-3': 'Dynamic Positioning',
  'products-showcase-card-3-title': 'Electric Outboard Motor',
  'products-showcase-card-3-desc': 'A high-efficiency power system tailored for small and medium boats, covering T-2 to T-15 with lightweight wireless control and quiet zero-emission cruising',
  'products-showcase-card-3-badge-1': 'Lightweight Anti-Corrosion',
  'products-showcase-card-3-badge-2': 'Wireless Control',
  'products-showcase-card-3-badge-3': 'Silent Zero Emission',
  'products-showcase-card-4-title': 'Tourism Sightseeing Boat',
  'products-showcase-card-4-desc': 'A fusion of advanced technology and marine aesthetics, tailored for modern eco-smart scenic operations with premium comfort',
  'products-showcase-card-4-badge-1': 'Lightweight Design',
  'products-showcase-card-4-badge-2': 'Smart Control',
  'products-showcase-card-4-badge-3': 'Zero Emission',
  'products-showcase-card-5-title': 'Unmanned Vessel',
  'products-showcase-card-5-desc': 'A high-precision intelligent control platform with panoramic interaction terminal, deeply integrating AI vision and LLM-assisted decision making for autonomous operations',
  'products-showcase-card-5-badge-1': 'Autonomous Navigation',
  'products-showcase-card-5-badge-2': 'AI Vision',
  'products-showcase-card-5-badge-3': 'Remote Control',
      'products-th-model': 'Model',
      'products-th-power': 'Power',
      'products-th-voltage': 'Voltage',
      'products-th-battery': 'Battery Config',
      'products-th-scenario': 'Scenario',
      'products-bat-t2': '1.2kWh Built-in',
      'products-bat-t5': '4.8kWh External',
      'products-bat-t10': '7.2kWh External',
      'products-bat-t15': '12kWh External',
      'products-bat-t25': '18kWh External',
      'products-bat-t40': '24kWh External',
      'products-t2': 'Low-speed/Kayak/Dinghy',
      'products-t5': 'Med-speed/Small Workboat',
      'products-t10': 'High-speed/Larger Load',
      'products-t15': 'Higher Perf/Retrofit',
      'products-t25': 'Med Workboat/Speedboat',
      'products-t40': 'Commercial/Large Tourism',
      'products-applications': 'Applications',
      'products-app-desc': 'Meeting professional marine electrification needs for different industries',
      'products-app-1': 'Tourism Operations',
      'products-app-1-desc': 'Low noise, low maintenance, long endurance; For scenic sightseeing & experience projects.',
      'products-app-1-badge-1': 'Low Noise',
      'products-app-1-badge-2': 'Long Endurance',
      'products-app-1-badge-3': 'Easy Maint',
      'products-app-2': 'Work/Patrol Boat',
      'products-app-2-desc': 'Stable & reliable, adapting to various loads; Supporting integration & remote monitoring.',
      'products-app-2-badge-1': 'Stable',
      'products-app-2-badge-2': 'Scalable',
      'products-app-2-badge-3': 'Remote Monitor',
      'products-app-3': 'Sailboat Retrofit',
      'products-app-3-desc': 'From 1kW to higher power upgrades; Matching powertrain & propeller optimization.',
      'products-app-3-badge-1': 'Retrofit',
      'products-app-3-badge-2': 'System Opt',
      'products-app-3-badge-3': 'Perf Boost',
      'products-app-4': 'Rib/Speedboat',
      'products-app-4-desc': 'High power output, fast response, for emergency rescue and high-speed patrol.',
      'products-app-4-badge-1': 'High Power',
      'products-app-4-badge-2': 'Fast Response',
      'products-app-5': 'Catamaran Tourism',
      'products-app-5-desc': 'Stable platform, spacious, suitable for sightseeing and leisure.',
      'products-app-5-badge-1': 'Stability',
      'products-app-5-badge-2': 'Comfort',
      'products-app-6': 'Research Vessel',
      'products-app-6-desc': 'Low interference propulsion, supporting precision instruments and data collection.',
      'products-app-6-badge-1': 'Low Interference',
      'products-app-6-badge-2': 'High Precision',
      'products-capabilities': 'Product Capabilities',
      'products-cap-desc': 'Comprehensive product support and service system',
      'products-cap-1-tab': 'Selection Advice',
      'products-cap-2-tab': 'Battery System',
      'products-cap-3-tab': 'Integration',
      'products-cap-4-tab': 'After-sales',
      'products-cap-1': 'Pro Selection Advice',
      'products-cap-1-desc': 'Professional advice based on hull, load, speed targets: Integrated config of motor, prop, controller, battery & harness.',
      'products-cap-1-badge-1': 'Hull Analysis',
      'products-cap-1-badge-2': 'Load Eval',
      'products-cap-1-badge-3': 'Speed Planning',
      'products-cap-2': 'Smart Battery System',
      'products-cap-2-desc': 'Supports 48V/96V/144V packs & external schemes, providing complete BMS & safety strategies (charging, temp, waterproof).',
      'products-cap-2-badge-1': 'Smart Mgmt',
      'products-cap-2-badge-2': 'Safety',
      'products-cap-2-badge-3': 'Long Life',
      'products-cap-3': 'Integrated System',
      'products-cap-3-desc': 'Supports integration of gauges, controls, sensors, positioning & autopilot; Custom delivery for tourism, workboats, USVs.',
      'products-cap-3-badge-1': 'Standard Interface',
      'products-cap-3-badge-2': 'Custom Dev',
      'products-cap-3-badge-3': 'Sys Testing',
      'products-cap-4': 'After-sales Service',
      'products-cap-4-desc': 'Installation guidance, operation training, regular maintenance & tech support to ensure long-term stability.',
      'products-cap-4-badge-1': 'Tech Training',
      'products-cap-4-badge-2': 'Regular Maint',
      'products-cap-4-badge-3': 'Remote Support',
      'products-cap-hero': 'Core<br>Capabilities',
      'products-cap-block-1-label': 'Engine Reliability',
      'products-cap-block-1-title': 'Fail-Safe Architecture',
      'products-cap-block-1-desc': 'Every T-Series unit features redundant cooling circuits and dual-winding stator configurations to ensure propulsion even in critical hardware failure events.',
      'products-cap-block-2-label': 'Intelligence',
      'products-cap-block-2-title': 'Neural Adaptive Control',
      'products-cap-block-2-desc': 'Our proprietary AI controllers adjust torque vectors in real-time by analyzing hull vibration and water resistance, increasing efficiency by up to 18%.',
      'products-cap-icon-1-title': 'Modular Interface',
      'products-cap-icon-1-desc': 'Plug-and-play architecture for rapid integration with existing bridge systems and 3rd party sensors.',
      'products-cap-icon-2-title': 'Machined Precision',
      'products-cap-icon-2-desc': 'Each component is CNC-milled from aerospace-grade aluminum and titanium alloys for ultimate durability.',
      'products-cap-icon-3-title': 'Eco Stewardship',
      'products-cap-icon-3-desc': 'Designed for 100% recyclability at end-of-life, with zero oil lubricants leaking into the marine ecosystem.',
      'products-cap-icon-4-title': 'Open SDK',
      'products-cap-icon-4-desc': 'Comprehensive software development kit for fleet managers and autonomous software developers.',
      'products-features': 'Features',
      'products-features-desc': 'Core advantages in design, performance and reliability',
      'products-feature-1': 'High Efficiency',
      'products-feature-1-desc': 'Efficient motors & optimized algorithms, saving 30%+ energy vs fuel, significantly reducing costs.',
      'products-feature-1-badge-1': 'Efficient Motor',
      'products-feature-1-badge-2': 'Smart Control',
      'products-feature-1-badge-3': 'Save 30%+',
      'products-feature-2': 'Eco & Silent',
      'products-feature-2-desc': 'Zero emission, noise <60dB, providing best protection for waters and user experience.',
      'products-feature-2-badge-1': 'Zero Emission',
      'products-feature-2-badge-2': 'Low Noise',
      'products-feature-2-badge-3': 'Eco Cert',
      'products-feature-3': 'Smart Control',
      'products-feature-3-desc': 'Integrated smart control system, supporting remote monitoring, diagnostics & OTA updates.',
      'products-feature-3-badge-1': 'Remote Monitor',
      'products-feature-3-badge-2': 'Diagnostics',
      'products-feature-3-badge-3': 'OTA Update',
      'products-feature-4': 'Safe & Reliable',
      'products-feature-4-desc': 'Multiple safety protections, IP67 rating, adapting to harsh water environments.',
      'products-feature-4-badge-1': 'Multi-protection',
      'products-feature-4-badge-2': 'IP67',
      'products-feature-4-badge-3': 'Harsh Env',
      'products-tab-outboard': 'Electric Outboard',
      'products-tab-tourism': 'Tourism/Ent',
      'products-tab-design': 'Design Service',
      'products-outboard-title': 'Small-Medium Power Outboards',
      'products-outboard-desc': 'Covering 0.4-10kW power range, 48V/96V voltage, suitable for leisure, workboats, and retrofits.',
      'products-outboard-badge-1': 'Low Noise',
      'products-outboard-badge-2': 'Easy Maintenance',
      'products-outboard-badge-3': 'High Efficiency',
      'products-tourism-title': 'Tourism Boat Solutions',
      'products-tourism-desc': 'Low-power slow tourism boats: long endurance, high stability; High-speed entertainment boats: strong experience.',
      'products-tourism-badge-1': 'Tourism Ops',
      'products-tourism-badge-2': 'Experience',
      'products-tourism-badge-3': 'Integration',
      'products-design-title': 'Hull Opt & Propeller Design',
      'products-design-desc': 'Input hull drawings/reqs, output propeller & powertrain config; CFD/EFD validation loop.',
      'products-design-badge-1': 'Resistance',
      'products-design-badge-2': 'Maneuverability',
      'products-design-badge-3': 'Efficiency',

      // --- Cases ---
      'cases-design-title': 'Hull & Propeller Design',
      'cases-design-desc': 'Professional propeller and hull design optimization services for all types of vessels',
      'cases-design-1': 'Propeller Design',
      'cases-design-1-desc': 'Parametric design + performance prediction + testing; Supports different hulls & powertrains.',
      'cases-design-1-badge-1': 'Efficiency Up',
      'cases-design-1-badge-2': 'Noise Down',
      'cases-design-1-badge-3': 'Custom Design',
      'cases-design-2': 'Hull Optimization',
      'cases-design-2-desc': 'Comprehensive optimization of resistance, seakeeping, maneuverability; Supports rapid comparison & delivery.',
      'cases-design-2-badge-1': 'CFD Analysis',
      'cases-design-2-badge-2': 'EFD Validation',
      'cases-design-2-badge-3': 'Optimization',
      'cases-design-3': 'Real-ship Validation',
      'cases-design-3-desc': 'Combining real-ship tests with data comparison to provide quantifiable results and improvement suggestions.',
      'cases-design-3-badge-1': 'Report',
      'cases-design-3-badge-2': 'Engineering',
      'cases-design-3-badge-3': 'Data Verification',
      'cases-design-4': 'Case: Tourism Boat Prop Optimization',
      'cases-design-4-desc': 'Designed a new high-efficiency propeller for a scenic tourism boat via CFD & real tests, achieving:',
      'cases-design-4-effect-1': 'Propulsion efficiency increased by 15%',
      'cases-design-4-effect-2': 'Running noise reduced by 8dB',
      'cases-design-4-effect-3': 'Endurance increased by 20%',
      'cases-design-4-effect-4': 'Maintenance cycle doubled',
      'cases-upgrade-title': 'Boat Upgrade & Retrofit',
      'cases-upgrade-desc': 'Electric upgrade and performance optimization services for all types of vessels',
      'cases-upgrade-1': 'Electric Sailboat Retrofit',
      'cases-upgrade-1-desc': 'Low power output for long-term use; Battery & system integration for training and operations.',
      'cases-upgrade-1-badge-1': 'Low Power',
      'cases-upgrade-1-badge-2': 'Long Endurance',
      'cases-upgrade-1-badge-3': 'System Integration',
      'cases-upgrade-2': 'High-speed Boat Prop Upgrade',
      'cases-upgrade-2-desc': 'Max speed increase, efficiency optimization & test comparison; Specialized optimization for performance needs.',
      'cases-upgrade-2-badge-1': 'Speed Up',
      'cases-upgrade-2-badge-2': 'Efficiency Opt',
      'cases-upgrade-2-badge-3': 'Specialized',
      'cases-upgrade-3': '1kW Upgrade Scheme',
      'cases-upgrade-3-desc': 'Electric retrofit for small boats, suitable for leisure and training.',
      'cases-upgrade-3-badge-1': 'Small Boat',
      'cases-upgrade-3-badge-2': 'Leisure',
      'cases-upgrade-4': '6kW Upgrade Scheme',
      'cases-upgrade-4-desc': 'Electric retrofit for medium workboats and tourism boats.',
      'cases-upgrade-4-badge-1': 'Medium Boat',
      'cases-upgrade-4-badge-2': 'Workboat',
      'cases-upgrade-5': '300kW Upgrade Scheme',
      'cases-upgrade-5-desc': 'Electric retrofit for large vessels and high-speed boats.',
      'cases-upgrade-5-badge-1': 'Large Vessel',
      'cases-upgrade-5-badge-2': 'High Speed',
      'cases-bike-title': 'Water Bike',
      'cases-bike-desc': 'Innovative water entertainment equipment providing unique outdoor experience',
      'cases-bike-1': 'Product Highlights',
      'cases-bike-1-desc': 'Adapted to narrow/shallow waters, agile steering, stable posture, high controllability.',
      'cases-bike-1-badge-1': 'Tourism',
      'cases-bike-1-badge-2': 'Outdoor Exp',
      'cases-bike-1-badge-3': 'Operational',
      'cases-bike-2': 'Applications',
      'cases-bike-2-scenario-1': 'Scenic Water Entertainment',
      'cases-bike-2-scenario-2': 'Water Sports Training',
      'cases-bike-2-scenario-3': 'Leisure Experience',
      'cases-bike-2-scenario-4': 'Team Building',
      'cases-bike-3': 'Indoor Pool Test',
      'cases-bike-3-desc': 'Performance testing and safety verification in a controlled environment.',
      'cases-bike-3-badge-1': 'Perf Test',
      'cases-bike-3-badge-2': 'Safety Verif',
      'cases-bike-3-badge-3': 'Controlled Env',
      'cases-bike-4': 'Outdoor Application',
      'cases-bike-4-desc': 'Validating product performance and reliability in actual water environments.',
      'cases-bike-4-badge-1': 'Actual Water',
      'cases-bike-4-badge-2': 'Perf Verif',
      'cases-bike-4-badge-3': 'Reliability',
      'cases-usv-title': 'USV Solutions',
      'cases-usv-desc': 'Advanced unmanned autonomous navigation vessel solutions',
      'cases-usv-1': 'Mission Planning',
      'cases-usv-1-desc': 'Set route/waypoints, auto execution & return, multi-task switching.',
      'cases-usv-1-badge-1': 'Route Planning',
      'cases-usv-1-badge-2': 'Auto Exec',
      'cases-usv-1-badge-3': 'Multi-task',
      'cases-usv-2': 'Autonomous Navigation',
      'cases-usv-2-desc': 'Positioning & heading control loop, scalable perception & obstacle avoidance modules.',
      'cases-usv-2-badge-1': 'Pos Control',
      'cases-usv-2-badge-2': 'Heading Control',
      'cases-usv-2-badge-3': 'Obs Avoidance',
      'cases-usv-3': 'Exhibition/Teaching',
      'cases-usv-3-desc': 'Compatible with indoor/water demos, suitable for universities, expos & education.',
      'cases-usv-3-badge-1': 'University',
      'cases-usv-3-badge-2': 'Exhibition',
      'cases-usv-3-badge-3': 'Education',
      'cases-usv-4': 'Catamaran USV Verification',
      'cases-usv-4-desc': 'Catamaran hull provides higher stability, suitable for complex water environments.',
      'cases-usv-4-badge-1': 'Catamaran',
      'cases-usv-4-badge-2': 'High Stability',
      'cases-usv-4-badge-3': 'Complex Water',
      'cases-usv-5': 'Successfully applied to a water inspection project, achieving 24h continuous monitoring.',
      'cases-brand-title': 'Brand Boat Retrofit',
      'cases-brand-desc': 'Electric retrofit and performance optimization for famous boat models',
      'cases-brand-1': 'Brand A Sailboat',
      'cases-brand-1-desc': 'Provided electric auxiliary power system, improving handling and convenience.',
      'cases-brand-1-badge-1': 'Aux Power',
      'cases-brand-1-badge-2': 'Handling Up',
      'cases-brand-2': 'Brand B Workboat',
      'cases-brand-2-desc': 'Electric retrofit for workboat, reducing operating costs and maintenance.',
      'cases-brand-2-badge-1': 'Cost Down',
      'cases-brand-2-badge-2': 'Easy Maint',
      'cases-brand-3': 'Brand C Speedboat',
      'cases-brand-3-desc': 'Performance optimization for speedboat, improving speed and fuel efficiency.',
      'cases-brand-3-badge-1': 'Speed Up',
      'cases-brand-3-badge-2': 'Efficiency Opt',

      // --- Solutions ---
      'solutions-electrification-title': 'Marine Electrification Solutions',
      'solutions-electrification-desc': 'Complete loop: Selection → Powertrain → Propeller Matching → Verification → Delivery',
      'solutions-type-a': 'Type A (≤1kW)',
      'solutions-type-a-desc': 'Light leisure boats, kayaks, paddle boards; Low cost & rapid deployment.',
      'solutions-type-a-badge-1': 'Lightweight',
      'solutions-type-a-badge-2': 'Rapid Deploy',
      'solutions-type-a-badge-3': 'Low Cost',
      'solutions-type-b': 'Type B (1–10kW)',
      'solutions-type-b-desc': 'Tourism, workboats, retrofits; Flexible 48/96V schemes.',
      'solutions-type-b-badge-1': 'Tourism',
      'solutions-type-b-badge-2': 'Workboat',
      'solutions-type-b-badge-3': 'Retrofit',
      'solutions-type-c': 'Type C/D (High Power)',
      'solutions-type-c-desc': 'For larger vessels & higher speeds; System-level optimization with CFD/EFD.',
      'solutions-type-c-badge-1': 'Large Vessel',
      'solutions-type-c-badge-2': 'High Speed',
      'solutions-type-c-badge-3': 'Optimization',
      'solutions-process': 'Electrification Process',
      'solutions-process-desc': 'Analysis → Design → Selection → Installation → Verification → Training',
      'solutions-process-badge-1': '6 Steps',
      'solutions-process-badge-2': 'Standardized',
      'solutions-process-badge-3': 'Traceable',
      'solutions-verification': 'Verification Service',
      'solutions-verification-desc': 'Real-ship test, data analysis, performance comparison, optimization suggestions, report.',
      'solutions-verification-badge-1': 'Real Test',
      'solutions-verification-badge-2': 'Analysis',
      'solutions-verification-badge-3': 'Report',
      'solutions-autopilot-title': 'Autopilot & Integration',
      'solutions-autopilot-desc': 'Advanced marine autopilot systems and intelligent integration solutions',
      'solutions-autopilot-1': 'Autopilot Capabilities',
      'solutions-autopilot-1-desc': 'Path planning, tracking, avoidance & heading control; Supports human-machine collab & remote mode.',
      'solutions-autopilot-1-badge-1': 'Planning',
      'solutions-autopilot-1-badge-2': 'Avoidance',
      'solutions-autopilot-1-badge-3': 'Mode Switch',
      'solutions-autopilot-2': 'System Integration',
      'solutions-autopilot-2-desc': 'Integrates motor drive, sensors, positioning, gauges & comms; Standardized interfaces for engineering.',
      'solutions-autopilot-2-badge-1': 'Standard Interface',
      'solutions-autopilot-2-badge-2': 'Modular',
      'solutions-autopilot-2-badge-3': 'Scalable',
      'solutions-autopilot-3': 'Sensor Fusion',
      'solutions-autopilot-3-desc': 'Fusion of GPS, IMU, Radar, Camera to improve environmental perception accuracy.',
      'solutions-autopilot-4': 'HMI',
      'solutions-autopilot-4-desc': 'Intuitive control interface supporting touch screens and mobile remote control.',
      'solutions-autopilot-5': 'Cloud Services',
      'solutions-autopilot-5-desc': 'Fleet management, data storage, remote upgrades, intelligent analysis.',
      'solutions-usv-title': 'USV Solutions',
      'solutions-usv-desc': 'Multi-scenario unmanned autonomous navigation vessel solutions',
      'solutions-usv-1': 'Remote Control',
      'solutions-usv-1-desc': 'Replaces humans in danger zones; Supports mission planning, status return & risk control.',
      'solutions-usv-1-badge-1': 'Dangerous Ops',
      'solutions-usv-1-badge-2': 'Remote Ctrl',
      'solutions-usv-1-badge-3': 'Risk Ctrl',
      'solutions-usv-2': 'Autonomous Nav',
      'solutions-usv-2-desc': 'GPS waypoint execution; Scalable vision/radar perception.',
      'solutions-usv-2-badge-1': 'GPS Nav',
      'solutions-usv-2-badge-2': 'Auto Exec',
      'solutions-usv-2-badge-3': 'Avoidance',
      'solutions-usv-3': 'Multi-task Payload',
      'solutions-usv-3-desc': 'Inspection, survey, research, demo; Expandable interfaces & structure.',
      'solutions-usv-3-badge-1': 'Custom Task',
      'solutions-usv-3-badge-2': 'Expandable',
      'solutions-usv-3-badge-3': 'Multi-purpose',
      'solutions-usv-4': 'Applications',
      'solutions-usv-4-desc': 'Water inspection, environmental monitoring, underwater mapping, research, security, rescue.',
      'solutions-usv-4-badge-1': 'Inspection',
      'solutions-usv-4-badge-2': 'Monitoring',
      'solutions-usv-4-badge-3': 'Mapping',
      'solutions-usv-5': 'Successfully applied to a water inspection project, achieving 24h continuous monitoring.',
      'solutions-factory-title': 'Factory & Supply Chain',
      'solutions-factory-desc': 'Comprehensive manufacturing system and supply chain management',
      'solutions-factory-1': 'Mfg & Verification',
      'solutions-factory-1-desc': 'From machining, assembly, testing to lab reports; Emphasizing engineering & delivery reliability.',
      'solutions-factory-1-badge-1': 'CNC',
      'solutions-factory-1-badge-2': 'Precision',
      'solutions-factory-1-badge-3': 'Strict Test',
      'solutions-factory-2': 'Training Ground',
      'solutions-factory-2-desc': 'Professional water testing grounds supporting vessel performance testing in various environments.',
      'solutions-factory-3': 'Propeller Mfg',
      'solutions-factory-3-desc': 'Advanced casting workshop supporting customized propeller design and production.',
      'solutions-factory-4': 'Testing Lab',
      'solutions-factory-4-desc': 'Comprehensive testing equipment and labs ensuring product performance and quality.',
      'solutions-industry-title': 'Industry Solutions',
      'solutions-industry-desc': 'Customized solutions for different industries',
      'solutions-industry-1': 'Tourism',
      'solutions-industry-1-desc': 'Sightseeing boats, water entertainment facilities, featured water projects.',
      'solutions-industry-1-badge-1': 'Sightseeing',
      'solutions-industry-1-badge-2': 'Entertainment',
      'solutions-industry-1-badge-3': 'Projects',
      'solutions-industry-2': 'Public Service',
      'solutions-industry-2-desc': 'Water inspection, environmental monitoring, emergency rescue, security patrol.',
      'solutions-industry-2-badge-1': 'Inspection',
      'solutions-industry-2-badge-2': 'Monitoring',
      'solutions-industry-2-badge-3': 'Rescue',
      'solutions-industry-3': 'Research & Edu',
      'solutions-industry-3-desc': 'Ocean research, teaching experiments, science popularization, technical training.',
      'solutions-industry-3-badge-1': 'Research',
      'solutions-industry-3-badge-2': 'Experiments',
      'solutions-industry-3-badge-3': 'Science Pop',

      // --- Technology ---
      'tech-eval-title': 'Vessel Performance Evaluation',
      'tech-eval-desc': 'Comprehensive vessel performance evaluation system based on advanced computing',
      'tech-eval-1': 'Evaluation Pipeline',
      'tech-eval-1-desc': 'Kinematics → Dynamics → Autopilot Control → Resistance/Wake/Viscous Analysis → Maneuverability/Seakeeping/Stability/Speed Output.',
      'tech-eval-badge-1': 'Maneuverability',
      'tech-eval-badge-2': 'Seakeeping',
      'tech-eval-badge-3': 'Stability',
      'tech-eval-badge-4': 'Speed',
      'tech-eval-2': 'Kinematics Solving',
      'tech-eval-2-desc': 'Accurately calculating vessel motion response in various sea states based on 6-DOF equations.',
      'tech-eval-3': 'Dynamics Solving',
      'tech-eval-3-desc': 'Analyzing vessel dynamic characteristics considering hydrodynamics, inertial forces, and environmental forces.',
      'tech-eval-4': 'Control System Design',
      'tech-eval-4-desc': 'Designing autopilot and motion control systems based on modern control theory.',
      'tech-cfd-title': 'CFD / EFD & AI Fusion',
      'tech-cfd-desc': 'Combining Computational & Experimental Fluid Dynamics with AI for optimized design',
      'tech-cfd-1': 'CFD',
      'tech-cfd-1-desc': 'Rapid evaluation of resistance, wake field, post-prop flow & efficiency, supporting shape optimization.',
      'tech-cfd-1-badge-1': 'Resistance',
      'tech-cfd-1-badge-2': 'Flow Sim',
      'tech-cfd-1-badge-3': 'Efficiency',
      'tech-cfd-2': 'EFD',
      'tech-cfd-2-desc': 'Towing, calm water/sea tests & verification to improve prediction credibility & deliverability.',
      'tech-cfd-2-badge-1': 'Towing Test',
      'tech-cfd-2-badge-2': 'Real Test',
      'tech-cfd-2-badge-3': 'Data Verif',
      'tech-cfd-3': 'AI Proxy Optimization',
      'tech-cfd-3-desc': 'Training optimizers based on data & simulation to explore parameter space automatically.',
      'tech-cfd-3-badge-1': 'Optimization',
      'tech-cfd-3-badge-2': 'Intelligent',
      'tech-cfd-3-badge-3': 'Fast Converge',
      'tech-control-title': 'AI-based Control Surface Design',
      'tech-control-desc': 'Intelligent control surface parameter optimization and airfoil library management',
      'tech-control-1': 'Parametric Modeling',
      'tech-control-1-desc': 'Parametrizing geometry, angle, position & constraints for rapid optimizer search.',
      'tech-control-1-badge-1': 'Parametric',
      'tech-control-1-badge-2': 'Constraints',
      'tech-control-2': 'Multi-objective Opt',
      'tech-control-2-desc': 'Targeting resistance, lift, steady/dynamic response with manufacturability constraints.',
      'tech-control-2-badge-1': 'Multi-obj',
      'tech-control-2-badge-2': 'Constraint',
      'tech-control-2-badge-3': 'Mfg-ready',
      'tech-control-3': 'Airfoil Library',
      'tech-control-3-desc': 'Establishing standardized airfoil database supporting rapid retrieval, comparison and adjustment.',
      'tech-control-3-badge-1': 'Database',
      'tech-control-3-badge-2': 'Standardized',
      'tech-control-3-badge-3': 'Adjustment',
      'tech-motor-title': 'Motor & Driver Design',
      'tech-motor-desc': 'Motor system design and driver technology for marine environments',
      'tech-motor-1': 'Motor Design',
      'tech-motor-1-desc': 'For marine conditions, combining waterproofing, cooling & reliability; Custom speed/torque curves.',
      'tech-motor-1-badge-1': 'Waterproof',
      'tech-motor-1-badge-2': 'Cooling',
      'tech-motor-1-badge-3': 'Reliability',
      'tech-motor-2': 'FOC Control',
      'tech-motor-2-desc': 'Stable brushless motor control, supporting Back-EMF, HFI and other key paths.',
      'tech-motor-2-badge-1': 'FOC',
      'tech-motor-2-badge-2': 'Back-EMF',
      'tech-motor-2-badge-3': 'HFI',
      'tech-motor-3': 'Driver Iteration',
      'tech-motor-3-desc': 'Gen 1 → Gen 2 → Gen 3 (Beta) roadmap, iterating for cost, performance & maintainability.',
      'tech-motor-3-badge-1': 'Cost Opt',
      'tech-motor-3-badge-2': 'Perf Up',
      'tech-motor-3-badge-3': 'Maintainable',
      'tech-motor-4': 'Thermal Management',
      'tech-motor-4-desc': 'High-efficiency thermal design ensuring stable motor operation under long-term high loads.',
      'tech-motor-4-badge-1': 'Thermal Sim',
      'tech-motor-4-badge-2': 'Cooling Sys',
      'tech-motor-4-badge-3': 'Temp Monitor',
      'tech-motor-5': 'Fault Diagnosis',
      'tech-motor-5-desc': 'Real-time monitoring of motor status, early warning of potential faults, improving reliability.',
      'tech-motor-5-badge-1': 'Monitoring',
      'tech-motor-5-badge-2': 'Warning',
      'tech-motor-5-badge-3': 'Health Mgmt',
      'tech-intelligent-title': 'Intelligent Control & Integration',
      'tech-intelligent-desc': 'Advanced vessel control systems and integration technology',
      'tech-intelligent-1': 'Autopilot System',
      'tech-intelligent-1-desc': 'Autopilot algorithms based on multi-sensor fusion, supporting path planning, avoidance & autonomous nav.',
      'tech-intelligent-1-badge-1': 'Fusion',
      'tech-intelligent-1-badge-2': 'Planning',
      'tech-intelligent-1-badge-3': 'Autonomous',
      'tech-intelligent-2': 'Remote Monitoring',
      'tech-intelligent-2-desc': 'Real-time vessel status monitoring, supporting remote control and data return.',
      'tech-intelligent-2-badge-1': 'Monitoring',
      'tech-intelligent-2-badge-2': 'Remote',
      'tech-intelligent-2-badge-3': 'Data Return',
      'tech-intelligent-3': 'Energy Management',
      'tech-intelligent-3-desc': 'Intelligent allocation and optimization of energy use, extending endurance.',
      'tech-intelligent-3-badge-1': 'Energy Opt',
      'tech-intelligent-3-badge-2': 'Allocation',
      'tech-intelligent-3-badge-3': 'Endurance',

      // --- News ---
      'news-title': 'News Center',
      'news-desc': 'Latest updates, technical progress and industry news from Taiyi Marine',
      'news-category-tech': 'Tech Breakthrough',
      'news-title-1': 'Taiyi Marine Launches New Generation Efficient Electric Outboards',
      'news-excerpt-1': 'Taiyi Marine recently successfully developed and launched a new series of efficient electric outboards.',
      'news-tag-product': 'Electric Outboard',
      'news-tag-tech': 'Innovation',
      'news-category-case': 'Success Case',
      'news-title-2': 'Taiyi Marine Provides Electric Retrofit for West Lake Tourism Boats',
      'news-excerpt-2': 'Cooperated with West Lake Scenic Area to complete the first batch of 10 tourism boat retrofits.',
      'news-tag-culture': 'Tourism Boat',
      'news-tag-retrofit': 'Retrofit',
      'news-category-industry': 'Industry News',
      'news-title-3': 'Marine Electrification Accelerates, Taiyi Invited to International Forum',
      'news-excerpt-3': 'At a recent international maritime tech forum, Taiyi CTO shared the latest achievements.',
      'news-tag-forum': 'Forum',
      'news-end': 'No more content',
      'news-subscribe-title': 'Subscribe to Newsletter',
      'news-subscribe-desc': 'Get the latest product info and tech updates from Taiyi Marine',
      'news-subscribe-placeholder': 'Enter your email',
      'news-subscribe-privacy': 'We respect your privacy and will not share your info',

      // --- Contact ---
      'contact-title': 'Contact Us',
      'contact-desc': 'Submit requirements, we provide pro electric schemes based on hull, power, speed & scenario.',
      'contact-form-title': 'Requirement Form',
      'contact-form-desc': 'Please fill in the info below, our expert team will provide a customized solution',
      'contact-form-name': 'Your Name *',
      'contact-form-name-ph': 'Enter your name',
      'contact-form-phone': 'Phone Number *',
      'contact-form-phone-ph': 'Enter phone number',
      'contact-form-email': 'Email *',
      'contact-form-email-ph': 'Enter email address',
      'contact-form-company': 'Company/Org',
      'contact-form-company-ph': 'Enter company or organization name',
      'contact-form-boat': 'Boat Info',
      'contact-form-boat-ph': 'Type/Tonnage/Length',
      'contact-form-power': 'Power Req',
      'contact-form-power-ph': 'Select power requirement',
      'contact-form-power-1': '≤1kW',
      'contact-form-power-2': '1-10kW',
      'contact-form-power-3': '10-50kW',
      'contact-form-power-4': '50-100kW',
      'contact-form-power-5': '100kW+',
      'contact-form-requirements': 'Detailed Reqs *',
      'contact-form-requirements-ph': 'Please describe details: speed, range, scenario, retrofit/new, autopilot needed?',
      'contact-form-submit': 'Submit Requirement',
      'contact-info-title': 'Contact Info',
      'contact-info-desc': 'Get latest product info and tech support',
      'contact-info-company-title': 'Company Information',
      'contact-info-company': 'Taiyi Marine Intelligence Technology Co., Ltd.',
      'contact-info-phone': 'Phone',
      'contact-info-email': 'Email',
      'contact-info-address': 'Address',
      'contact-info-worktime': 'Working Hours',
      'contact-info-worktime-val': 'Mon-Fri 9:00-18:00',
      'contact-follow-title': 'Follow Us',
      'contact-follow-qrcode': 'WeChat QR Code (TBD)',
      'contact-follow-scan': 'Scan to follow WeChat',
      'contact-follow-desc': 'Get latest updates',
      'contact-process-title': 'Service Process',
      'contact-process-desc': 'Complete service link from requirement communication to project delivery',
      'contact-process-1': 'Communication',
      'contact-process-1-desc': 'Detailed understanding of hull, power needs, speed targets & scenarios',
      'contact-process-2': 'Design',
      'contact-process-2-desc': 'Customized electric scheme design, including powertrain & integration',
      'contact-process-3': 'Implementation',
      'contact-process-3-desc': 'Product delivery, installation, training & tech support',
      'contact-process-4': 'Verification',
      'contact-process-4-desc': 'Real-ship performance testing ensuring design reqs & safety standards',
      'contact-process-5': 'Optimization',
      'contact-process-5-desc': 'System optimization based on test results for best performance',
      'contact-process-6': 'Service',
      'contact-process-6-desc': 'Regular maintenance, remote support & system upgrades',
      'contact-start-project': 'Start Your Project',
    }
  };

  // 2. 初始化逻辑
  document.addEventListener('DOMContentLoaded', () => {
    
    // 2.1 页面淡入效果
    document.body.classList.add('fade-in');

    // 2.2 导航栏滚动效果
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // 2.3 移动端菜单切换
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('[data-mobile]');
    
    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const isOpen = mobileMenu.classList.contains('open');
        burger.setAttribute('aria-expanded', isOpen);
      });
    }

    // 2.4 Tab 切换功能
    const tabContainers = document.querySelectorAll('[data-tabs]');
    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const panels = container.querySelectorAll('.tabpanels .panel');
      
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          
          tab.classList.add('active');
          if (panels[index]) {
            panels[index].classList.add('active');
          }
        });
      });
    });

    // 2.5 语言切换功能
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatables = document.querySelectorAll('[data-translate]');
    const LANGUAGE_STORAGE_KEY = 'taiyi-lang';
    let currentLang = 'zh';
    const LANG_MAP = { zh: 'zh-CN', en: 'en' };

    function getCurrentLanguage() {
      const saved = loadSavedLanguage();
      if (saved) return saved;
      const browserLang = (navigator.language || '').toLowerCase();
      if (browserLang.startsWith('en')) return 'en';
      const activeBtn = document.querySelector('.lang-btn.active');
      if (activeBtn && activeBtn.dataset.lang) {
        return activeBtn.dataset.lang;
      }
      return 'zh';
    }

    function saveLanguage(lang) {
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      } catch (err) {
        // ignore storage errors
      }
    }

    function loadSavedLanguage() {
      try {
        const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (saved && translations[saved]) return saved;
      } catch (err) {
        // ignore storage errors
      }
      return null;
    }

    function setLanguage(lang) {
      const safeLang = translations[lang] ? lang : 'zh';
      currentLang = safeLang;

      langBtns.forEach(btn => {
        if(btn.dataset.lang === safeLang) btn.classList.add('active');
        else btn.classList.remove('active');
      });

      saveLanguage(safeLang);
      document.documentElement.lang = LANG_MAP[safeLang] || 'zh-CN';

      translatables.forEach(el => {
        const key = el.dataset.translate;
        const text = translations[safeLang]?.[key] || translations['zh']?.[key];
        if (!text) return;
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
           // 处理 placeholder
           if(el.hasAttribute('placeholder')) {
              el.placeholder = text;
           }
           // 处理 select 的 default option
           if(el.tagName === 'SELECT' && el.options.length > 0 && el.options[0].disabled) {
              el.options[0].textContent = text;
           }
        } else {
          el.textContent = text;
        }
      });

      // 若产品弹窗处于打开状态，动态切换弹窗语言
      const modal = document.getElementById('product-modal');
      if (modal && modal.classList.contains('active') && modal.dataset.productId) {
        const modalBody = modal.querySelector('.modal-body');
        if (modalBody) {
          modalBody.innerHTML = getProductData(modal.dataset.productId, safeLang);
        }
      }
    }

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    // 页面初始化时，优先使用历史语言偏好
    const initialLang = loadSavedLanguage() || getCurrentLanguage();
    setLanguage(initialLang);

    // 2.6 滚动动画
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    reveals.forEach(el => observer.observe(el));

    // 2.7 自动更新页脚年份
    const yearSpan = document.getElementById('y');
    if(yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // 2.8 表单提交处理 (Mock)
    // 联系表单
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 获取当前语言环境以显示对应提示
        const isEn = document.querySelector('.lang-btn[data-lang="en"]').classList.contains('active');
        const msg = isEn ? 
          'Thank you! Your requirement has been submitted. We will contact you shortly.' : 
          '提交成功！我们已收到您的需求，将尽快与您联系。';
        alert(msg);
        contactForm.reset();
      });
    }

    // 订阅表单
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const isEn = document.querySelector('.lang-btn[data-lang="en"]').classList.contains('active');
        const msg = isEn ? 
          'Subscribed successfully!' : 
          '订阅成功！感谢您的关注。';
        alert(msg);
        newsletterForm.reset();
      });
    }

    // 2.9 产品详情模态框功能
    function initProductModals() {
      const modal = document.getElementById('product-modal');
      if (!modal) return; // 如果不是产品页面，则退出

      const modalBody = modal.querySelector('.modal-body');
      const modalCloseButtons = modal.querySelectorAll('[data-close-modal]');

      // 所有产品卡片点击事件
      document.querySelectorAll('[data-product-modal]').forEach(card => {
        card.addEventListener('click', (e) => {
          const productId = card.getAttribute('data-product-modal');
          const productData = getProductData(productId, currentLang);

          // 填充模态框内容
          modalBody.innerHTML = productData;
          modal.dataset.productId = productId;

          // 显示模态框
          modal.classList.add('active');
          document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
      });

      // 关闭模态框
      modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
          modal.classList.remove('active');
          document.body.style.overflow = '';
          delete modal.dataset.productId;
        });
      });

      // 点击模态框背景关闭
      modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
          delete modal.dataset.productId;
        }
      });

      // ESC键关闭
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
          delete modal.dataset.productId;
        }
      });
    }

    // 根据产品ID获取数据
    function getProductData(productId, lang = 'zh') {
      const products = {
        zh: {
          'water-jet': `
            <h2>电动喷泵推进器</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC WATER JET PROPULSION</p>
            <div class="modal-product-image">
              <img src="assets/images/电动喷泵推进器.png" alt="电动喷泵推进器">
            </div>
            <p>全栈自研的高性能船舶用电动喷水推进器，专为现代新能源船舶及高速无人水面载具（USV）设计。系统将高效直流无刷电机与先进的流体力学喷嘴设计完美结合，替代传统裸露式螺旋桨，为船舶提供强劲、平稳且高响应的推力。凭借其零排放、低噪音及出色的浅水航行能力，是纯电动船、混合动力船及特种水上设备的理想推进解决方案。</p>
            <table class="table">
              <thead>
                <tr><th>项目</th><th>参数</th></tr>
              </thead>
              <tbody>
                <tr><td>最大流量</td><td>60 L/min (3.6 m³/h)</td></tr>
                <tr><td>最大扬程</td><td>45 m (148 ft)</td></tr>
                <tr><td>额定功率</td><td>1.1 kW (1.5 HP)</td></tr>
                <tr><td>进出水口径</td><td>40 mm</td></tr>
                <tr><td>最大工作压力</td><td>6 bar (87 PSI)</td></tr>
                <tr><td>尺寸</td><td>520 × 180 × 135 mm</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">获取方案咨询</a>
            </div>
          `,
          'voith-schneider': `
            <h2>电动直翼桨推进器</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC VOITH SCHNEIDER PROPELLER</p>
            <div class="modal-product-image">
              <img src="assets/images/电动直翼桨推进器.png" alt="电动直翼桨推进器">
            </div>
            <p>本款全栈自研的高性能船舶用电动直翼桨推进器，代表了现代船舶推进与操纵技术的完美结合。系统摒弃了传统的“螺旋桨+舵”模式，采用直驱无刷电机带动底部旋转盘，盘上悬挂数片垂直安装的水翼型桨叶。通过精密的伺服机构智能控制算法调节每片桨叶的攻角，实时控制调节，系统能在不改变电机转速和旋转方向的情况下，瞬间向360度任意方向产生无级变化的推力。它是对船舶机动性、动态定位（DP）能力有严苛要求的纯电动及混合动力船舶的终极解决方案。</p>
            <table class="table">
              <thead>
                <tr><th>项目</th><th>参数</th></tr>
              </thead>
              <tbody>
                <tr><td>额定功率</td><td>75 kW</td></tr>
                <tr><td>最大推力</td><td>4500 N</td></tr>
                <tr><td>桨叶数量</td><td>5</td></tr>
                <tr><td>旋转直径</td><td>700 mm</td></tr>
                <tr><td>适用船型</td><td>15-20m 快速舯舟、消防工作船等</td></tr>
                <tr><td>控制方式</td><td>360° 全方向、A.I. 辅助控制</td></tr>
                <tr><td>材质</td><td>铝合金</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">获取方案咨询</a>
            </div>
          `,
          'thruster-packages': `
            <h2>电动舷外机推进器</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC OUTBOARD MOTOR</p>
            <div class="modal-product-image">
              <img src="assets/images/电动舷外机推进器.png" alt="电动舷外机推进器">
            </div>
            <p>专为中小型船艇量身定制的高效动力系统，以科技重塑水上航行体验。</p>
            <p>航空级精工与空间释放：机身采用航空级铝合金打造，兼具极致轻量化与顶级抗冲防腐性能。一体化悬挂式设计，安装便捷，实现船内空间零占用。</p>
            <p>无线手柄“游戏级”驾控：搭载创新蓝牙无线操控系统，彻底淘汰传统机械拉线。指尖微动即可实现精准调速与转向，让复杂的水上驾驶变得如玩游戏般简单直观。</p>
            <p>全场景绿色静谧动力：无惧静谧湖区或近海环境，持续输出强劲推力的同时，实现零污染、极低噪音运行，时刻守护水域生态。</p>
            <table class="table">
              <thead>
                <tr><th>可选型号</th><th>T-2</th><th>T-5</th><th>T-10</th><th>T-15</th></tr>
              </thead>
              <tbody>
                <tr><td>电机额定功率</td><td>1kW</td><td>3kW</td><td>6kW</td><td>10kW</td></tr>
                <tr><td>电池电量</td><td>1.2kWh</td><td>4.8kWh（外接）</td><td>7.2kWh（外接）</td><td>12kWh（外接）</td></tr>
                <tr><td>电池电压</td><td>48V</td><td>48V</td><td>96V</td><td>96V</td></tr>
                <tr><td>适用船型</td><td>低速文娱船，如小型帆船、皮划艇、桨板等</td><td>中速文娱船，如小型帆船、皮划艇、桨板等</td><td>高速文娱船、低速客运船，如画舫船等</td><td>低中速客运船</td></tr>
                <tr><td>尺寸（长×宽×高）</td><td>250 × 100 × 1100 毫米</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>重量</td><td>---</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>轴长</td><td>610 毫米</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>螺旋桨半径</td><td>135 毫米</td><td>---</td><td>---</td><td>---</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">获取方案咨询</a>
            </div>
          `,
          'tourist-boat': `
            <h2>文旅观光船</h2>
            <div class="modal-product-image">
              <img src="assets/images/⽂旅观光船.png" alt="文旅观光船">
            </div>
            <p>将尖端科技与水上美学完美融合，专为现代绿色智能景区量身定制：</p>
            <p>轻盈设计与舒享空间：精选轻量化铝合金材质，实现125kg超轻量机身。配备3.8米宽敞平台与全景遮阳篷，打造极致舒适的水上观光视野。</p>
            <p>沉浸式“游戏级”智驾：颠覆传统操作，搭载智能手柄蓝牙操控与AI语音交互系统，让水上驾控如同玩游戏般简单、有趣且极具科技感。</p>
            <p>绿色静谧的生态动力：深度集成AI智能动力分配系统与零排放舷外机，实现无痕静谧航行，在提供高端巡游体验的同时，完美守护景区的自然生态。</p>
            <p><strong>产品参数</strong></p>
            <table class="table">
              <thead>
                <tr><th>项目</th><th>参数详情</th></tr>
              </thead>
              <tbody>
                <tr><td>整体尺寸（长×宽×高）</td><td>380cm × 276cm × 208cm</td></tr>
                <tr><td>平台尺寸</td><td>160cm × 200cm</td></tr>
                <tr><td>浮体规格（长×宽×厚）</td><td>380cm × 60cm × 30cm</td></tr>
                <tr><td>遮阳篷尺寸（长×宽×高）</td><td>180cm × 160cm × 150cm</td></tr>
                <tr><td>最大载员</td><td>5 人</td></tr>
                <tr><td>最大承重</td><td>400kg</td></tr>
                <tr><td>整船重量</td><td>约 125kg</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">获取方案咨询</a>
            </div>
          `,
          'unmanned-ship': `
            <h2>无人船</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">UNMANNED SHIP</p>
            <p>无人船智能驾控系统（UNMANNED SHIP）</p>
            <p>高精度智控底座：自主研发融合“自适应控制”与“非线性模型预测控制（nMPC）”的底层算法，实现对船舶复杂动力学的高精度、平滑自动控制。</p>
            <p>全景交互船载终端：自研基于 Linux 的智能终端，全面打通船用总线与多源传感器接口。深度集成 AIS/RIS、电子海图及气象系统，并通过虚拟仪表全方位、直观映射船舶实时状态。</p>
            <p>AI视觉智能驾驶：内置基于神经网络的视觉目标检测与船体状态监测模块，感知数据与底层控制算法深度联动，构筑安全可靠的自动驾驶闭环。</p>
            <p>大模型（LLM）辅助决策：前瞻性接入 DeepSeek 等先进大语言模型，构建“航行智能助手”，赋能船长及岸基人员实现海量信息的秒级检索与高效的航行辅助决策。</p>
          `
        },
        en: {
          'water-jet': `
            <h2>Electric Water-Jet Thruster</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC WATER JET PROPULSION</p>
            <div class="modal-product-image">
              <img src="assets/images/电动喷泵推进器.png" alt="Electric Water-Jet Thruster">
            </div>
            <p>A full-stack self-developed high-performance electric water-jet propulsion system designed for modern new-energy vessels and high-speed unmanned surface vehicles (USV). By combining efficient BLDC motors with advanced hydrodynamic nozzle design, it replaces exposed propellers and delivers strong, stable, and highly responsive thrust. With zero emission, low noise, and excellent shallow-water capability, it is an ideal solution for pure electric vessels, hybrid vessels, and specialized marine equipment.</p>
            <table class="table">
              <thead>
                <tr><th>Item</th><th>Parameter</th></tr>
              </thead>
              <tbody>
                <tr><td>Max Flow</td><td>60 L/min (3.6 m³/h)</td></tr>
                <tr><td>Max Head</td><td>45 m (148 ft)</td></tr>
                <tr><td>Rated Power</td><td>1.1 kW (1.5 HP)</td></tr>
                <tr><td>Inlet/Outlet Diameter</td><td>40 mm</td></tr>
                <tr><td>Max Working Pressure</td><td>6 bar (87 PSI)</td></tr>
                <tr><td>Dimensions</td><td>520 × 180 × 135 mm</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">Get Solution Consultation</a>
            </div>
          `,
          'voith-schneider': `
            <h2>Electric Voith-Schneider Thruster</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC VOITH SCHNEIDER PROPELLER</p>
            <div class="modal-product-image">
              <img src="assets/images/电动直翼桨推进器.png" alt="Electric Voith-Schneider Thruster">
            </div>
            <p>This full-stack self-developed high-performance electric Voith-Schneider propeller represents an advanced fusion of propulsion and maneuvering technology. It replaces the conventional “propeller + rudder” architecture with a direct-drive motor rotating a bottom disk equipped with vertically mounted hydrofoil blades. By precisely adjusting blade pitch in real time via servo mechanisms and intelligent control algorithms, the system can generate continuously variable thrust in any 360° direction without changing motor speed or rotation direction. It is the ultimate solution for pure-electric and hybrid vessels requiring extreme maneuverability and dynamic positioning (DP) performance.</p>
            <table class="table">
              <thead>
                <tr><th>Item</th><th>Parameter</th></tr>
              </thead>
              <tbody>
                <tr><td>Rated Power</td><td>75 kW</td></tr>
                <tr><td>Max Thrust</td><td>4500 N</td></tr>
                <tr><td>Blade Count</td><td>5</td></tr>
                <tr><td>Rotation Diameter</td><td>700 mm</td></tr>
                <tr><td>Applicable Vessels</td><td>15-20m fast mid-size craft, firefighting workboats, etc.</td></tr>
                <tr><td>Control Mode</td><td>360° omnidirectional, A.I.-assisted control</td></tr>
                <tr><td>Material</td><td>Aluminum Alloy</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">Get Solution Consultation</a>
            </div>
          `,
          'thruster-packages': `
            <h2>Electric Outboard Motor</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">ELECTRIC OUTBOARD MOTOR</p>
            <div class="modal-product-image">
              <img src="assets/images/电动舷外机推进器.png" alt="Electric Outboard Motor">
            </div>
            <p>A high-efficiency power system tailored for small and medium vessels, redefining on-water mobility with advanced engineering.</p>
            <p>Aerospace-grade craftsmanship and space efficiency: The body uses aerospace-grade aluminum alloy for exceptional lightweight performance and top-tier impact/corrosion resistance. The integrated hanging structure enables easy installation and zero cabin-space occupation.</p>
            <p>“Game-level” wireless handle control: Equipped with an innovative Bluetooth wireless control system, eliminating traditional mechanical cable control. Fine finger movement enables precise speed and steering control for an intuitive driving experience.</p>
            <p>Green and quiet power for all scenarios: Whether in quiet lakes or near-shore waters, it delivers strong thrust with zero pollution and ultra-low noise, continuously protecting the aquatic ecosystem.</p>
            <table class="table">
              <thead>
                <tr><th>Model</th><th>T-2</th><th>T-5</th><th>T-10</th><th>T-15</th></tr>
              </thead>
              <tbody>
                <tr><td>Rated Motor Power</td><td>1kW</td><td>3kW</td><td>6kW</td><td>10kW</td></tr>
                <tr><td>Battery Capacity</td><td>1.2kWh</td><td>4.8kWh (External)</td><td>7.2kWh (External)</td><td>12kWh (External)</td></tr>
                <tr><td>Battery Voltage</td><td>48V</td><td>48V</td><td>96V</td><td>96V</td></tr>
                <tr><td>Applicable Vessel Type</td><td>Low-speed recreational boats, such as small sailboats, kayaks, paddleboards</td><td>Mid-speed recreational boats, such as small sailboats, kayaks, paddleboards</td><td>High-speed recreational boats and low-speed passenger boats (e.g., painted pleasure boats)</td><td>Low/medium-speed passenger boats</td></tr>
                <tr><td>Dimensions (L×W×H)</td><td>250 × 100 × 1100 mm</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>Weight</td><td>---</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>Shaft Length</td><td>610 mm</td><td>---</td><td>---</td><td>---</td></tr>
                <tr><td>Propeller Radius</td><td>135 mm</td><td>---</td><td>---</td><td>---</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">Get Solution Consultation</a>
            </div>
          `,
          'tourist-boat': `
            <h2>Tourism Sightseeing Boat</h2>
            <div class="modal-product-image">
              <img src="assets/images/⽂旅观光船.png" alt="Tourism Sightseeing Boat">
            </div>
            <p>A seamless blend of advanced technology and marine aesthetics, tailored for modern eco-smart scenic destinations:</p>
            <p>Lightweight design and premium comfort: Selected lightweight aluminum alloy structure enables an ultra-light 125kg body. Equipped with a 3.8m spacious platform and panoramic canopy for a highly comfortable sightseeing view.</p>
            <p>Immersive “game-level” smart driving: Reinventing conventional operation with Bluetooth smart-handle control and AI voice interaction, making water driving intuitive, fun, and highly futuristic.</p>
            <p>Green and quiet ecological propulsion: Deeply integrated AI intelligent power distribution and zero-emission outboard propulsion enable trace-free quiet cruising while preserving the natural environment.</p>
            <p><strong>Product Specifications</strong></p>
            <table class="table">
              <thead>
                <tr><th>Item</th><th>Specification</th></tr>
              </thead>
              <tbody>
                <tr><td>Overall Dimensions (L×W×H)</td><td>380cm × 276cm × 208cm</td></tr>
                <tr><td>Platform Size</td><td>160cm × 200cm</td></tr>
                <tr><td>Float Dimensions (L×W×T)</td><td>380cm × 60cm × 30cm</td></tr>
                <tr><td>Canopy Dimensions (L×W×H)</td><td>180cm × 160cm × 150cm</td></tr>
                <tr><td>Max Passengers</td><td>5 persons</td></tr>
                <tr><td>Max Payload</td><td>400kg</td></tr>
                <tr><td>Vessel Weight</td><td>Approx. 125kg</td></tr>
              </tbody>
            </table>
            <div style="text-align:center;margin-top:32px;">
              <a class="btn primary" href="contact.html" style="display:inline-block;">Get Solution Consultation</a>
            </div>
          `,
          'unmanned-ship': `
            <h2>Unmanned Ship</h2>
            <p style="margin-top:-8px;color:var(--blue-700);font-weight:700;letter-spacing:0.8px;">UNMANNED SHIP</p>
            <p>Unmanned ship intelligent driving and control system (UNMANNED SHIP)</p>
            <p>High-precision intelligent control base: A self-developed control core combining adaptive control and nonlinear model predictive control (nMPC) for smooth and precise vessel dynamics control.</p>
            <p>Panoramic onboard interaction terminal: Linux-based intelligent terminal with full integration of marine bus interfaces and multi-source sensors, deeply integrated with AIS/RIS, ECDIS, and weather systems.</p>
            <p>AI visual intelligent navigation: Built-in neural-network-based target detection and vessel-state monitoring, tightly linked with low-level control algorithms to form a reliable autonomous-driving loop.</p>
            <p>LLM-assisted decision making: Forward-looking integration with advanced LLMs such as DeepSeek to build an intelligent navigation assistant for rapid information retrieval and efficient voyage decision support.</p>
          `
        }
      };

      const safeLang = products[lang] ? lang : 'zh';
      return products[safeLang][productId] || products.zh[productId] || '<p>Product info failed to load. Please try again later.</p>';
    }

    // 初始化产品模态框功能
    initProductModals();

  });
})();
