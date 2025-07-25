import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Rayquaza (Delta Species)",
         ja: "レイカザ（デルタ種）",
         fr: "Rayquaza (espèce delta)",
         de: "Rayquaza (Delta -Arten)",
         es: "Rayquaza (especie delta)",
         it: "Rayquaza (Delta Species)",
         pt: "Rayquaza (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 90,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Delta Guard",
            ja: "デルタガード",
            fr: "Gardien delta",
            de: "Delta Guard",
            es: "Guardia delta",
            it: "Delta Guard",
            pt: "Delta Guard",
          },
          effect: {
            en: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
            ja: "Rayquazaにホロンエネルギーカードが付いている限り、Rayquazaの稲妻攻撃の効果を無視してください。",
            fr: "Tant que Rayquaza a des cartes Holon Energy attachées, ignorez l'effet de l'attaque de la tempête de Lightning de Rayquaza.",
            de: "Solange Rayquaza irgendwelche Holon Energy -Karten befestigt hat, ignorieren Sie den Effekt von Rayquazas Blitzsturmangriff.",
            es: "Mientras Rayquaza tenga alguna carta de energía Holon unidas a ella, ignore el efecto del ataque de tormenta de rayos de Rayquaza.",
            it: "Finché Rayquaza ha le carte di energia holon attaccate ad esso, ignora l'effetto dell'attacco di tempesta di fulmini di Rayquaza.",
            pt: "Enquanto Rayquaza tiver qualquer um Holon Energy Cards anexado a ele, ignore o efeito do ataque de tempestade de Rayquaza.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Power Blow",
            ja: "パワーブロー",
            fr: "Coup de courant",
            de: "Kraftschläge",
            es: "Golpe de poder",
            it: "Potenza",
            pt: "Golpe de poder",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to Rayquaza.",
            ja: "Rayquazaに取り付けられたエネルギーの量を10回損傷します。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée à Rayquaza.",
            de: "Schädigt 10 Mal die Energie, die an Rayquaza verbunden ist.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida a Rayquaza.",
            it: "Fa 10 danni volte la quantità di energia attaccata a Rayquaza.",
            pt: "10 danos vezes a quantidade de energia ligada a Rayquaza.",
          },
        },
        {
          cost: ["Lightning", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Lightning Storm",
            ja: "稲妻",
            fr: "Tempête de foudre",
            de: "Blitzsturm",
            es: "Tormenta de rayo",
            it: "Tempesta di fulmini",
            pt: "Tempestade de raios",
          },
          effect: {
            en: "Put 7 damage counters on Rayquaza.",
            ja: "Rayquazaに7つのダメージカウンターを入れます。",
            fr: "Mettez 7 compteurs de dégâts sur Rayquaza.",
            de: "Legen Sie Rayquaza 7 Schadenszähler.",
            es: "Pon 7 contadores de daño en Rayquaza.",
            it: "Metti 7 contatori di danno su Rayquaza.",
            pt: "Coloque 7 contadores de danos em Rayquaza.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
