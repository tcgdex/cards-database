import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Zapdos",
         ja: "ロケットのザプドス",
         fr: "Zapdos de Rocket",
         de: "Rocket's Zapdos",
         es: "Zapdos de cohete",
         it: "Zapdos di Rocket",
         pt: "Zapdos do foguete",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [145],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Plasma",
            ja: "プラズマ",
            fr: "Plasma",
            de: "Plasma",
            es: "Plasma",
            it: "Plasma",
            pt: "Plasma",
          },
          effect: {
            en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos.",
            ja: "廃棄パイルに稲妻エネルギーカードがある場合は、それらの1つをロケットのザプドに取り付けます。",
            fr: "S'il y a des cartes d'énergie Lightning dans votre tas de défausse, attachez 1 d'entre elles aux zapdos de Rocket.",
            de: "Wenn Sie Lightning Energy -Karten in Ihrem Ablagerungsstapel enthalten, befestigen Sie 1 an Rockets Zapdos.",
            es: "Si hay tarjetas de energía de rayos en su pila de descarte, coloque 1 de ellas a los Zapdos de Rocket.",
            it: "Se ci sono carte di energia Lightning nella tua pila di scarto, attacca 1 a Zapdos di Rocket.",
            pt: "Se houver cartas de energia raios em sua pilha de descarte, anexe 1 deles aos Zapdos do Rocket.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Electroburn",
            ja: "エレクトロブルン",
            fr: "Électroval",
            de: "Elektroburn",
            es: "Electroburn",
            it: "Elettroburn",
            pt: "Eletroburno",
          },
          effect: {
            en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it.",
            ja: "RocketのZapdosは、それに取り付けられたLightning Energyカードの数の10倍に相当するそれ自体にダメージを与えます。",
            fr: "Les zapdos de Rocket endommagent-ils eux-mêmes 10 fois le nombre de cartes d'énergie Lightning qui y sont attachées.",
            de: "Rockets Zapdos schädigt sich selbst in Höhe des 10 -fachen der Anzahl der daran befestigten Blitzelenergiekarten.",
            es: "El Zapdos de Rocket se da daño a sí mismo igual a 10 veces el número de tarjetas de energía Lightning unidas a ella.",
            it: "Zapdos di Rocket fa danni a se stesso pari a 10 volte il numero di carte di energia Lightning attaccate.",
            pt: "O Zapdos do Rocket causa danos a si igual a 10 vezes o número de cartões de energia de raios ligados a ele.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
