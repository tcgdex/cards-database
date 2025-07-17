import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther",
         ja: "スキスター",
         fr: "Scyther",
         de: "Scyther",
         es: "Esciteta",
         it: "Scither",
         pt: "Scyther",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [123],
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
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Scyther.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Scytherに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain virage de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Scyther.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Scyther verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Scyther.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Sciyther.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Scyther.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Sharp Sickle",
            ja: "鋭い鎌",
            fr: "Faucille",
            de: "Scharfe Sichel",
            es: "Hoz agudo",
            it: "Falce acuta",
            pt: "Ficha afiada",
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
