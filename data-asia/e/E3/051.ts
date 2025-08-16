import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggutor - 051/087",
         ja: "Exeggutor -051/087",
         fr: "Exagutor - 051/087",
         de: "Exeggutor - 051/087",
         es: "Exeggutor - 051/087",
         it: "Exeggutor - 051/087",
         pt: "Exeggutor - 051/087",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [103],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Big Eggsplosion",
            ja: "大きな卵の幅",
            fr: "Grosplosion d'oeufs",
            de: "Big Egslsplosion",
            es: "Gran huevo",
            it: "Grande uova",
            pt: "Grande eggsplosion",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
            ja: "exeggutorに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie attachée à l'exagutateur. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der an Exeggutor verbundenen Energie entspricht. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual a la cantidad de energía unida a Exeggutor. Este ataque hace 20 veces el número de cabezas.",
            it: "Capolare una serie di monete pari alla quantità di energia collegata a Exeggutor. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma série de moedas iguais à quantidade de energia anexada ao exeggutor. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Lateral Eggsplosion",
            ja: "横卵の幅",
            fr: "Plosion d'oeufs latéraux",
            de: "Lateraler Eiersplosion",
            es: "Splosion lateral",
            it: "Eggsplosion laterale",
            pt: "Plosão de ovos laterais",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Energy attached to all of your Benched Pokemon. This attack does 30 damage plus 10 more damage for each heads.",
            ja: "すべてのベンチポケモンに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie attachée à tous vos pokemon bancés. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Reihe von Münzen um, die der an alle Ihre Bankpokémon angeschlossenen Energie entspricht. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual a la cantidad de energía unida a todos sus Pokémon de banca. Este ataque hace 30 daños más 10 daños más para cada cabezal.",
            it: "Capovolgi un numero di monete pari alla quantità di energia collegata a tutto il pokemon in panchina. Questo attacco infligge 30 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais à quantidade de energia ligada a todos os seus Pokémon em banco. Este ataque causa 30 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
