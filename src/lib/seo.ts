export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Dique Piscu Yaco — San Luis, Argentina',
      description:
        'Guía de viaje al Dique Piscu Yaco en San Luis, Argentina. Espejo de agua cristalino en las Sierras de los Comechingones.',
      ogTitle: 'Dique Piscu Yaco — San Luis, Argentina',
      ogDescription:
        'Guía de viaje al Dique Piscu Yaco en San Luis, Argentina. Espejo de agua cristalino.',
      siteName: 'Guía de Dique Piscu Yaco',
      keywords: [
        'Dique Piscu Yaco',
        'Piscu Yaco',
        'San Luis tourism',
        'Argentina tourism',
        'Villa de Merlo',
        'Sierras de los Comechingones',
        '皮斯库亚科水库',
        '圣路易斯旅游',
      ],
    },
    en: {
      title: 'Dique Piscu Yaco — San Luis, Argentina',
      description:
        'A travel guide to Dique Piscu Yaco in San Luis, Argentina. A crystal-clear mountain reservoir in the Sierras de los Comechingones.',
      ogTitle: 'Dique Piscu Yaco — San Luis, Argentina',
      ogDescription: 'A travel guide to Dique Piscu Yaco in San Luis, Argentina.',
      siteName: 'Dique Piscu Yaco Travel Guide',
      keywords: [
        'Dique Piscu Yaco',
        'Piscu Yaco',
        'San Luis tourism',
        'Argentina tourism',
        'Villa de Merlo',
        'Sierras de los Comechingones',
        '皮斯库亚科水库',
        '圣路易斯旅游',
      ],
    },
    zh: {
      title: '皮斯库亚科水库 — 阿根廷圣路易斯',
      description:
        '皮斯库亚科水库（Dique Piscu Yaco）旅行指南——探索阿根廷圣路易斯省科门钦戈内斯山脉中的清澈碧水与山水胜景。',
      ogTitle: '皮斯库亚科水库 — 阿根廷圣路易斯',
      ogDescription: '皮斯库亚科水库旅行指南——探索阿根廷圣路易斯的清澈碧水。',
      siteName: '皮斯库亚科水库旅行指南',
      keywords: [
        'Dique Piscu Yaco',
        'Piscu Yaco',
        'San Luis tourism',
        'Argentina tourism',
        'Villa de Merlo',
        'Sierras de los Comechingones',
        '皮斯库亚科水库',
        '圣路易斯旅游',
      ],
    },
    it: {
      title: 'Dique Piscu Yaco — San Luis, Argentina',
      description:
        'Guida al Dique Piscu Yaco a San Luis, Argentina. Specchio d\'acqua cristallino nelle Sierras de los Comechingones.',
      ogTitle: 'Dique Piscu Yaco — San Luis, Argentina',
      ogDescription: 'Guida al Dique Piscu Yaco a San Luis, Argentina. Specchio d\'acqua cristallino.',
      siteName: 'Guida di Dique Piscu Yaco',
      keywords: [
        'Dique Piscu Yaco',
        'Piscu Yaco',
        'San Luis tourism',
        'Argentina tourism',
        'Villa de Merlo',
        'Sierras de los Comechingones',
        '皮斯库亚科水库',
        '圣路易斯旅游',
      ],
    },
  };
  return map[locale] || map.es;
}
