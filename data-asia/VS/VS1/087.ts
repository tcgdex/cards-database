import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Karen's Rapidash",
         ja: "カレンズラピダッシュ",
         fr: "Karen's Rapidash",
         de: "Karen's Rapidash",
         es: "Ratashash de Karen",
         it: "Karen's Rapidash",
         pt: "Rapidash de Karen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [78],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Karen's Rapidash.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、カレンのRapidashに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Karen's Rapidash.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Karen's Rapidash verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todos los efectos de los ataques, incluido el daño, se hacen a Rapatash de Karen.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti alla rapidash di Karen.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Rapidash de Karen.",
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
