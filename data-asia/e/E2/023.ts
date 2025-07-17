import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Seaking",
         ja: "航海",
         fr: "Coulant",
         de: "Seckung",
         es: "Pasta",
         it: "Seaking",
         pt: "Seaking",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "This attack does 10 damage times the number of damage counters on Seaking.",
            ja: "この攻撃は、航海中のダメージ数の数の10回のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts de temps le nombre de compteurs de dégâts lors de la couture.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Schäden bei der Seckel.",
            es: "Este ataque hace 10 tiempos de daño el número de contadores de daño en Seaking.",
            it: "Questo attacco fa 10 danni volte il numero di contatori di danno su Seaking.",
            pt: "Este ataque causa 10 danos vezes o número de contadores de danos ao mar.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Undulate",
            ja: "うねります",
            fr: "Onduler",
            de: "Wellig",
            es: "Ondular",
            it: "Ondulato",
            pt: "Ondular",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seaking.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、航海に行われる損傷を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, placés à Seaking.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Kurve Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, der Seckung verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los ataques de los ataques, incluido el daño, se hagan a Seaking.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Seaking.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao mar.",
          },
          damage: 30,
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
