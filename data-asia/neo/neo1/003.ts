import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Ledyba",
         ja: "レディバ",
         fr: "Ledyba",
         de: "Ledyba",
         es: "Ledyba",
         it: "Ledyba",
         pt: "Ledyba",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [165],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
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
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Comet Punch",
            ja: "彗星パンチ",
            fr: "Punch de comète",
            de: "Komet Punch",
            es: "Cometa",
            it: "Punch di comete",
            pt: "Cometa Punch",
          },
          effect: {
            en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
