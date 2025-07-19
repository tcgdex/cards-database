import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Tropius (Delta Species)",
         ja: "トロピウス（デルタ種）",
         fr: "Tropius (espèces delta)",
         de: "Tropius (Delta -Arten)",
         es: "Tropius (especie delta)",
         it: "Tropio (specie delta)",
         pt: "Tropius (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [357],
      hp: 70,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Tropical Heal",
            ja: "熱帯治癒",
            fr: "Guérison tropicale",
            de: "Tropenheilung",
            es: "Curación tropical",
            it: "Guarigione tropicale",
            pt: "Cura tropical",
          },
          effect: {
            en: "Once during your turn, when you put Tropius from your hand onto your Bench, you may remove all Special Conditions, Imprison markers, and Shock-wave markers from your PokÃ©mon.",
            ja: "ターン中に、トロピウスを手からベンチに置くと、すべての特別な条件、投獄マーカー、およびPokã©Monから衝撃波マーカーを削除できます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Tropius de votre main sur votre banc, vous pouvez supprimer toutes les conditions spéciales, les marqueurs d'emprisonnement et les marqueurs d'ondes de choc de votre poké.",
            de: "Sobald Sie in Ihrem Zug, wenn Sie Tropius von Ihrer Hand auf Ihre Bank legen, können Sie alle besonderen Bedingungen, Inhaftiermarkierungen und Stoßwellenmarkierungen von Ihrem Poké Mon entfernen.",
            es: "Una vez durante su turno, cuando coloca a Tropius de su mano en su banco, puede eliminar todas las condiciones especiales, marcadores de encarcelamiento y marcadores de onda de choque de su Poké Mon.",
            it: "Una volta durante il tuo turno, quando metti Tropio dalla tua mano sulla panchina, puoi rimuovere tutte le condizioni speciali, i marcatori di imprigionamento e i marcatori delle onde d'urto dal tuo poké mon.",
            pt: "Uma vez durante o seu turno, quando você coloca Tropius da sua mão em seu banco, poderá remover todas as condições especiais, prender marcadores e marcadores de ondas de choque do seu Poké Mon.",
          },
      }],

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Grind",
            ja: "粉砕",
            fr: "Moudre",
            de: "Schleifen",
            es: "Moler",
            it: "Macinare",
            pt: "Moer",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to Tropius.",
            ja: "トロピウスに取り付けられたエネルギーの量を10回損傷します。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée à Tropius.",
            de: "Schäden Sie 10 Schadenszeiten der an Tropius befestigten Energie.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida a Tropius.",
            it: "Fa 10 danni volte la quantità di energia attaccata a Tropio.",
            pt: "10 danos vezes a quantidade de energia ligada a Tropius.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
