export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;

  const name =
    locale === 'es'
      ? 'Dique Piscu Yaco'
      : locale === 'zh'
        ? '皮斯库亚科水库'
        : locale === 'it'
          ? 'Dique Piscu Yaco'
          : 'Dique Piscu Yaco';

  const description =
    locale === 'es'
      ? 'Dique Piscu Yaco en San Luis, Argentina. Espejo de agua cristalino en las Sierras de los Comechingones.'
      : locale === 'zh'
        ? '阿根廷圣路易斯省的皮斯库亚科水库（Dique Piscu Yaco），科门钦戈内斯山脉中清澈碧水的山水胜地。'
        : locale === 'it'
          ? 'Dique Piscu Yaco a San Luis, Argentina. Specchio d\'acqua cristallino nelle Sierras de los Comechingones.'
          : 'Dique Piscu Yaco in San Luis, Argentina. A crystal-clear mountain reservoir in the Sierras de los Comechingones.';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        name,
        alternateName: ['Dique Piscu Yaco', 'Piscu Yaco', '皮斯库亚科水库', 'Dique Piscu Yaco'],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/dique-piscu-yaco-01.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -32.37,
          longitude: -65.03,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'C2XV+QM Cortaderas',
          addressLocality: 'Cortaderas',
          addressRegion: 'San Luis',
          addressCountry: 'AR',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: 'Gratuito',
        isAccessibleForFree: true,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'C2XV+QM Cortaderas' },
          { '@type': 'PropertyValue', name: 'surfaceArea', value: '16.9 hectáreas' },
          { '@type': 'PropertyValue', name: 'inaugurated', value: '2010-12-20' },
          { '@type': 'PropertyValue', name: 'landformType', value: 'Embalse / Reservoir' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/CR1J7tdYQ1npuGF96',
          'https://www.argentina.travel',
          'https://turismo.sanluis.gob.ar',
          'https://villademerlo.tur.ar',
        ],
      },
      {
        '@type': 'WebSite',
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Dique Piscu Yaco Guide',
        },
      },
    ],
  };
}
