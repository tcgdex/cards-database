import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Pinsir",
         ja: "ピンシル",
         fr: "Pinsir",
         de: "Pinsir",
         es: "Pusir",
         it: "Pinir",
         pt: "Pinsir",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [127],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Horn Grab",
            ja: "ホーングラブ",
            fr: "Saisir de corne",
            de: "Horngreifer",
            es: "Agarrar a la bocina",
            it: "Corna",
            pt: "Grab Horn",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Super Slice",
            ja: "スーパースライス",
            fr: "Super tranche",
            de: "Super Slice",
            es: "Super porta",
            it: "Super fetta",
            pt: "Super Slice",
          },
          effect: {
            en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
            ja: "2つのコインをフリップします。どちらかが尾の場合、この攻撃は何もしません。",
            fr: "Flip 2 pièces. Si l'un ou l'autre est la queue, cette attaque ne fait rien.",
            de: "2 Münzen umdrehen. Wenn einer von ihnen Schwänze ist, tut dieser Angriff nichts.",
            es: "Flip 2 monedas. Si cualquiera de ellos es Tails, este ataque no hace nada.",
            it: "Flip 2 monete. Se uno di essi è coda, questo attacco non fa nulla.",
            pt: "Flip 2 moedas. Se qualquer um deles for cauda, esse ataque não faz nada.",
          },
          damage: 90,
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
