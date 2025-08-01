import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Quagsire",
         ja: "ミスティのquagsire",
         fr: "Misty's Quagsire",
         de: "Mistys Quagsire",
         es: "Misty's Quagsire",
         it: "Misty's Quagsire",
         pt: "Misty's Quagsire",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [195],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Hug",
            ja: "ハグ",
            fr: "Câlin",
            de: "Umarmung",
            es: "Abrazo",
            it: "Abbraccio",
            pt: "Abraço",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann sich das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in difesa non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode recuar durante o próximo turno do seu oponente.",
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
