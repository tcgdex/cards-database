import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Seadra",
         ja: "シードラ",
         fr: "Seadra",
         de: "Seadra",
         es: "Seadra",
         it: "Seadra",
         pt: "Seadra",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [117],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Wave Splash",
            ja: "波のスプラッシュ",
            fr: "Vague de vagues",
            de: "Wellenspritzer",
            es: "Salpicadería",
            it: "Splash d'onda",
            pt: "Splash de onda",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Water Bullet",
            ja: "水の弾丸",
            fr: "Balle aquatique",
            de: "Wasserkugel",
            es: "Bala de agua",
            it: "Bullet d'acqua",
            pt: "Bala de água",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Water Energy attached to Seadra. This attack does 30 damage plus 10 more damage for each heads.",
            ja: "Seadraに取り付けられた水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre d'énergie d'eau attachée à Seadra. Cette attaque fait 30 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Seadra befestigten Wasserenergie entspricht. Dieser Angriff verursacht 30 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de energía de agua unida a Seadra. Este ataque hace 30 daños más 10 daños más para cada cabezal.",
            it: "Capolare un numero di monete pari al numero di energia idrica attaccata a Seadra. Questo attacco infligge 30 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de energia da água ligada a Seadra. Este ataque causa 30 danos mais 10 mais danos para cada cabeça.",
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
