import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Sandslash",
         ja: "ブロックのサンドスラッシュ",
         fr: "Sandslash de Brock",
         de: "Brocks Sandslash",
         es: "Sandslash de Brock",
         it: "Sandslash di Brock",
         pt: "Sandshlash de Brock",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [28],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Pokemon Powers, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pouvoirs de pokemon ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht durch Schwäche, Widerstand, Pokemon -Kräfte oder andere Auswirkungen auf das verteidigende Pokemon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poderes de Pokémon o cualquier otro efecto en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, poteri di Pokemon o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poderes de Pokemon ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Needle Ball",
            ja: "ニードルボール",
            fr: "Boule à aiguille",
            de: "Nadelkugel",
            es: "Bola de aguja",
            it: "Palla di ago",
            pt: "Bola de agulha",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
