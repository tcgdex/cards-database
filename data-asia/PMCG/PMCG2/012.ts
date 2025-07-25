import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggutor",
         ja: "exeggutor",
         fr: "Exégteur",
         de: "Exeggutor",
         es: "Exeggutor",
         it: "Exeggutor",
         pt: "Exeggutor",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [103],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Teleport",
            ja: "テレポート",
            fr: "Se téléporter",
            de: "Teleport",
            es: "Teletransporte",
            it: "Teletrasporto",
            pt: "Teleport",
          },
          effect: {
            en: "Switch Exeggutor with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンの1つを備えたスイッチのexeggutor。",
            fr: "Communiquez l'exaguteur avec 1 de votre Pokémon banc.",
            de: "Wechseln Sie den Exeggutor mit 1 Ihrer Bank -Pokemon.",
            es: "Cambie el exeggutor con 1 de su pokemon de banca.",
            it: "Switch Exeggutor con 1 del tuo Pokemon in panchina.",
            pt: "Switch Exeggutor com 1 do seu Pokémon em banco.",
          },

        },
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
            en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
            ja: "Exeggutorに取り付けられたエネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez un nombre de pièces égales au nombre d'énergie attaché à l'exagutateur. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Exeggutor verbundenen Energie entspricht. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número de energía unida a Exeggutor. Este ataque hace 20 veces el número de cabezas.",
            it: "Capolare una serie di monete pari al numero di energia allegata a Exeggutor. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma série de moedas iguais ao número de energia anexada ao exeggutor. Este ataque causa 20 danos vezes o número de cabeças.",
          },

        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
