import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Dragonair",
         ja: "ライトドラゴンエア",
         fr: "Dragonair léger",
         de: "Leichter Dragonair",
         es: "Dragonaira ligera",
         it: "Dragonair leggero",
         pt: "Dragonair leve",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [148],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Healing Light",
            ja: "癒しの光",
            fr: "Lumière de guérison",
            de: "Heilendes Licht",
            es: "Luz curativa",
            it: "Luce di guarigione",
            pt: "Luz de cura",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon that has any damage counters on it.",
            ja: "ダメージカウンターがあるポケモンのそれぞれから1つのダメージカウンターを削除します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon qui a des compteurs de dégâts dessus.",
            de: "Entfernen Sie einen Schadenschalter von jedem Ihrer Pokémon, der Schadenszähler hat.",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon que tiene algún contador de daño.",
            it: "Rimuovi 1 contatore di danni da ciascuno dei Pokemon che ha contatori di danno su di esso.",
            pt: "Remova 1 contador de danos de cada um dos seus Pokémon que possui contadores de dano.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Protective Wave",
            ja: "保護波",
            fr: "Vague de protection",
            de: "Schutzwelle",
            es: "Ola protectora",
            it: "Onda protettiva",
            pt: "Onda de proteção",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響を防ぎ、Light Dragonairに行われます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, effectués en dragonair éclairé.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an leichten Drachenair verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Light DragonAir.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti alla luce Dragonair.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados à luz dragão.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
