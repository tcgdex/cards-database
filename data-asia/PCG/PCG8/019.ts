import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Wartortle",
         ja: "wartortle",
         fr: "Wartortle",
         de: "Wartortle",
         es: "Verruga",
         it: "Wartortle",
         pt: "Wartortle",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [8],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Whip",
            ja: "テールホイップ",
            fr: "Fouet de queue",
            de: "Schwanzpeitsche",
            es: "Látigo de la cola",
            it: "Frusta di coda",
            pt: "Chicote de cauda",
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
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
