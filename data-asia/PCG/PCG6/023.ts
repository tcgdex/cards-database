import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Staryu",
         ja: "staryu",
         fr: "Staryu",
         de: "Staryu",
         es: "Staryu",
         it: "Staryu",
         pt: "Staryu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Surprise Attack",
            ja: "奇襲",
            fr: "Attaque surprise",
            de: "Überraschungsangriff",
            es: "Ataque sorpresa",
            it: "Attacco a sorpresa",
            pt: "Ataque surpresa",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Water"],
          name: {
            en: "Recover",
            ja: "回復する",
            fr: "Récupérer",
            de: "Genesen",
            es: "Recuperar",
            it: "Recuperare",
            pt: "Recuperar",
          },
          effect: {
            en: "Discard a Water Energy card attached to Staryu and remove 4 damage counters from Staryu (all if there are less than 4).",
            ja: "Staryuに取り付けられた水エネルギーカードを廃棄し、Staryuから4つのダメージカウンターを削除します（すべてが4未満の場合）。",
            fr: "Jeter une carte d'énergie d'eau attachée à Staryu et retirer 4 compteurs de dégâts de Staryu (tous s'il y en a moins de 4).",
            de: "Entsorgen Sie eine an Charyu befestigte Wasserergiekarte und entfernen Sie 4 Schadenszähler von Staryu (alle, wenn es weniger als 4 gibt).",
            es: "Deseche una tarjeta de energía de agua unida a Staryu y elimine 4 contadores de daño de Staryu (todo si hay menos de 4).",
            it: "Scartare una carta di energia idrica attaccata a SterAryu e rimuovere 4 contatori di danno da Staryu (tutto se ce ne sono meno di 4).",
            pt: "Descarte um cartão de energia da água preso a Staryu e remova 4 contadores de danos de Staryu (tudo se houver menos de 4).",
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
