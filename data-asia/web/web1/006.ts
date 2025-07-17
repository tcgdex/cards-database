import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe",
         ja: "うなり声",
         fr: "Grogner",
         de: "Knurren",
         es: "Gruñido",
         it: "Growlithe",
         pt: "Growlithe",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lunge",
            ja: "突進",
            fr: "Se précipiter",
            de: "Longe",
            es: "Estocada",
            it: "Affondo",
            pt: "Estocada",
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
          cost: ["Fire", "Colorless"],
          name: {
            en: "Ember",
            ja: "ember",
            fr: "Bilan",
            de: "Glut",
            es: "Ascua",
            it: "Ember",
            pt: "Brasa",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Growlithe or this attack does nothing.",
            ja: "Growlitheに取り付けられたFire Energyカードを捨てるか、この攻撃は何もしません。",
            fr: "Jeter une carte d'énergie d'incendie attachée au grognement ou cette attaque ne fait rien.",
            de: "Verwerfen Sie eine an Growlithe befestigte Brandenergiekarte, oder dieser Angriff tut nichts.",
            es: "Deseche una tarjeta de energía de fuego unida a Growlithe o este ataque no hace nada.",
            it: "Scartare una carta di energia antincendio attaccata a Growlithe o questo attacco non fa nulla.",
            pt: "Descarte um cartão de energia de incêndio ligado ao rosqueado ou esse ataque não faz nada.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
