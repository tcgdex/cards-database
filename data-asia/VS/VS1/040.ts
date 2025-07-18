import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Pryce's Cloyster",
         ja: "プライスのクロイスター",
         fr: "Cloyster de Pryce",
         de: "Pryces Cloyster",
         es: "Cloyster de Pryce",
         it: "Cloyster di Pryce",
         pt: "Cloyster de Pryce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [91],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Shell Grab",
            ja: "シェルグラブ",
            fr: "Saisir de coquille",
            de: "Muschelgreifer",
            es: "Captura de concha",
            it: "Guscio",
            pt: "Grab",
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
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Shell Attack",
            ja: "シェル攻撃",
            fr: "Attaque de coquille",
            de: "Muschelangriff",
            es: "Ataque",
            it: "Attacco a conchiglia",
            pt: "Ataque de concha",
          },
          damage: 20,
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
