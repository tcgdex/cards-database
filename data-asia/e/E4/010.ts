import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Yanma",
         ja: "ヤンマ",
         fr: "Yanma",
         de: "Yanma",
         es: "Yanma",
         it: "Yanma",
         pt: "Yanma",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [193],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
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
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Yanma.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ヤンマに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Yanma.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Yanma, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Yanma.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Yanma.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a Yanma.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Triple Smash",
            ja: "トリプルスマッシュ",
            fr: "Triple smash",
            de: "Triple Smash",
            es: "Triple Smash",
            it: "Triple Smash",
            pt: "Triple Smash",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage plus 10 more damage for each heads.",
            ja: "3コインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 20 daños más 10 daños más para cada cabezal.",
            it: "Flip 3 monete. Questo attacco infligge 20 danni più 10 danni in più per ogni teste.",
            pt: "Flip 3 moedas. Este ataque causa 20 de dano mais 10 mais danos para cada cabeça.",
          },
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
