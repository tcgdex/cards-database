import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu",
         ja: "ライチュ",
         fr: "Raichu",
         de: "Raichu",
         es: "Raichu",
         it: "Raichu",
         pt: "Raichu",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu.",
            ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、ライチーに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Raichu.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Raichu, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los ataques de los ataques, incluido el daño, se hagan a Raichu.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Raichu.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a Raichu.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder",
            ja: "雷",
            fr: "Tonnerre",
            de: "Donner",
            es: "Trueno",
            it: "Tuono",
            pt: "Trovão",
          },
          effect: {
            en: "Flip a coin. If tails, Raichu does 30 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、ライチュはそれ自体に30のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Raichu se fait 30 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, Raichu schädigt sich 30.",
            es: "Voltea una moneda. Si Tails, Raichu hace 30 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Raichu fa 30 danni a se stesso.",
            pt: "Vire uma moeda. Se caudas, Raichu causa 30 danos a si mesmo.",
          },
          damage: 60,
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
