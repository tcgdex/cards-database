import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Weepinbell",
         ja: "weepinbell",
         fr: "Weepinbell",
         de: "Weepinbell",
         es: "Llanura",
         it: "Weepinbell",
         pt: "Weepinbell",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [70],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Growth",
            ja: "成長",
            fr: "Croissance",
            de: "Wachstum",
            es: "Crecimiento",
            it: "Crescita",
            pt: "Crescimento",
          },
          effect: {
            en: "Attach up to 2 Grass Energy cards from your hand to Weepinbell.",
            ja: "あなたの手からweepinbellに最大2匹の草のエネルギーカードを取り付けます。",
            fr: "Fixez jusqu'à 2 cartes d'énergie de l'herbe de votre main à Weepinbell.",
            de: "Befestigen Sie bis zu 2 Grasergiekarten von Ihrer Hand nach Weepinbell.",
            es: "Adjunte hasta 2 tarjetas de energía de hierba de su mano a WeepInbell.",
            it: "Attacca fino a 2 carte di energia dell'erba dalla tua mano a piangere.",
            pt: "Anexe até 2 cartões de energia de grama da sua mão para Weepinbell.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Double Razor Leaf",
            ja: "ダブルレザーの葉",
            fr: "Feuille de rasoir double",
            de: "Doppel -Rasiererblatt",
            es: "Hoja de afeitar doble",
            it: "Doppia foglia di rasoio",
            pt: "Folha de barbear dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
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
