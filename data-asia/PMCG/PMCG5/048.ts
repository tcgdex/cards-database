import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Onix",
         ja: "ブロックのオニックス",
         fr: "Brock's Onix",
         de: "Brock ist onix",
         es: "Brock's Onix",
         it: "Brock è onix",
         pt: "Onix de Brock",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [95],
      hp: 100,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bellow",
            ja: "怒鳴ります",
            fr: "Ci-dessous",
            de: "Brüll",
            es: "Bramido",
            it: "Muggito",
            pt: "Abaixo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
