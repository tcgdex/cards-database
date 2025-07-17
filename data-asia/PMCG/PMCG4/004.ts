import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Grimer",
         ja: "グリマー",
         fr: "Sinistre",
         de: "Schmutz",
         es: "Mueca",
         it: "Grimer",
         pt: "Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Gas",
            ja: "毒ガス",
            fr: "Gaz toxique",
            de: "Giftgas",
            es: "Gas venenoso",
            it: "Gas veleno",
            pt: "Gás venenoso",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Sticky Hands",
            ja: "粘着性の手",
            fr: "Mains collantes",
            de: "Klebrige Hände",
            es: "Manos pegajosas",
            it: "Mani appiccicose",
            pt: "Mãos pegajosas",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokemon is now Paralyzed; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant paralysé; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden, und das verteidigende Pokémon ist jetzt gelähmt. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 10 daños más 20 más de daño y el Pokémon defensor ahora está paralizado; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 20 danni in più e il Pokemon in difesa è ora paralizzato; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos e o Pokémon atual está agora paralisado; Se caudas, esse ataque causa 10 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
