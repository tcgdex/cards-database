import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Drowzee",
         ja: "サブリナのドロージー",
         fr: "Drowzee de Sabrina",
         de: "Sabrinas Drowzee",
         es: "Drowzee de Sabrina",
         it: "La drowzee di Sabrina",
         pt: "Drowzee de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [96],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Suggestion",
            ja: "提案",
            fr: "Suggestion",
            de: "Anregung",
            es: "Sugerencia",
            it: "Suggerimento",
            pt: "Sugestão",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't attack during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht angreifen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica non può attaccare durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode atacar durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
