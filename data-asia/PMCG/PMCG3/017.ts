import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacruel",
         ja: "テンタクルエル",
         fr: "Tentacruel",
         de: "Tentacruel",
         es: "Tentacruel",
         it: "Tentacruel",
         pt: "Tentacruel",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [73],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: None,
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Jellyfish Sting",
            ja: "クラゲの刺し傷",
            fr: "Piqûre de méduse",
            de: "Qualle Sting",
            es: "Picadura de medusa",
            it: "Jellyfish Sting",
            pt: "Picada de água -viva",
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
          damage: 10,
        },
      ],


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
