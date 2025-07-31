import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Muk",
         ja: "Muk",
         fr: "Muk",
         de: "Muk",
         es: "Muk",
         it: "Muk",
         pt: "Muk",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Toxic Gas",
            ja: "有毒ガス",
            fr: "Gaz toxique",
            de: "Giftiges Gas",
            es: "Gas tóxico",
            it: "Gas tossico",
            pt: "Gás tóxico",
          },
          effect: {
            en: "Ignore all Pokmon Powers other than Toxic Gases. This power stops working while Muk is affected by a Special Condition.",
            ja: "有毒ガス以外のすべてのポケモンパワーを無視します。 MUKは特別な状態の影響を受けている間、このパワーは機能しなくなります。",
            fr: "Ignorez toutes les pouvoirs Pokémon autres que les gaz toxiques. Cette puissance cesse de fonctionner tandis que Muk est affecté par une condition spéciale.",
            de: "Ignorieren Sie alle anderen Pokemon -Kräfte als giftige Gase. Diese Kraft hört auf zu funktionieren, während Muk von einem besonderen Zustand betroffen ist.",
            es: "Ignore todos los poderes de Pokémon que no sean gases tóxicos. Esta potencia deja de funcionar mientras MUK se ve afectado por una condición especial.",
            it: "Ignora tutti i poteri di Pokemon diversi dai gas tossici. Questo potere smette di funzionare mentre Muk è influenzato da una condizione speciale.",
            pt: "Ignore todos os poderes de Pokémon que não sejam gases tóxicos. Esse poder para de funcionar enquanto Muk é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Sludge",
            ja: "スラッジ",
            fr: "Boue",
            de: "Schlamm",
            es: "Lodo",
            it: "Suddi",
            pt: "Lodo",
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

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
