import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Doduo",
         ja: "ドドゥオ",
         fr: "Doduo",
         de: "Doduo",
         es: "Doduo",
         it: "Doduo",
         pt: "Doduo",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [84],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Super Speed",
            ja: "スーパースピード",
            fr: "Super vitesse",
            de: "Supergeschwindigkeit",
            es: "Súper velocidad",
            it: "Super Speed",
            pt: "Super velocidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Doduo.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ドドゥオに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Doduo.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Doduo, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Doduo.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Doduo.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a Doduo.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rear Kick",
            ja: "リアキック",
            fr: "Coup de pied arrière",
            de: "Heck -Kick",
            es: "Patada trasera",
            it: "Calcio posteriore",
            pt: "Chute traseiro",
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
