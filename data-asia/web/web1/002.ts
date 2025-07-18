import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran",
         ja: "ニドラン",
         fr: "Nidoran",
         de: "Nidoran",
         es: "Nidoran",
         it: "Nidoran",
         pt: "Nidoran",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [Unknown],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Focus Energy",
            ja: "フォーカスエネルギー",
            fr: "Concentrer l'énergie",
            de: "Konzentrationsenergie",
            es: "Energía de enfoque",
            it: "Focus Energy",
            pt: "Foco em energia",
          },
          effect: {
            en: "During your next turn, Nidoran?'s Horn Rush attack's base damage is doubled.",
            ja: "次のターン中、ニドランのホーンラッシュ攻撃のベースダメージは2倍になります。",
            fr: "Au cours de votre prochain tour, les dégâts de base de la base de Nidoran Rush Attack sont doublés.",
            de: "In Ihrer nächsten Runde wird der Basisschäden von Nidoran? Horn Rush Attack verdoppelt.",
            es: "Durante su próximo turno, el daño base del ataque de Horn Rush Attack de Nidoran se duplica.",
            it: "Durante il tuo prossimo turno, il danno di base di Nidoran?",
            pt: "Durante o seu próximo turno, o dano básico de Nidoran? O ataque da BNACK é dobrado.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Horn Rush",
            ja: "ホーンラッシュ",
            fr: "Ruée",
            de: "Hornsturm",
            es: "Cornero",
            it: "Rush del corno",
            pt: "Rush da buzina",
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
          damage: 40,
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
