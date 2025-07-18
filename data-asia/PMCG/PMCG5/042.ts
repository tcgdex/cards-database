import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Jolteon",
         ja: "Surge's Jolteon中t",
         fr: "Jolteon du lieutenant",
         de: "Lt. Surge's Jolteon",
         es: "Jolteon del teniente Surge",
         it: "Jolteon di Ten. Surge",
         pt: "Jolteon do tenente Surge",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "High Voltage",
            ja: "高電圧",
            fr: "Haute tension",
            de: "Hochspannung",
            es: "Alto voltaje",
            it: "Alta tensione",
            pt: "Alta tensão",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中にトレーナーカードをプレイできません。",
            fr: "Retourner une pièce. Si les têtes, votre adversaire ne peut pas jouer aux cartes d'entraîneur lors de son prochain tour.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Ihr Gegner während seiner nächsten Kurve keine Trainerkarten spielen.",
            es: "Voltea una moneda. Si se dirige, tu oponente no puede jugar cartas de entrenador durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario non può giocare a carte di allenatore durante il suo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, seu oponente não pode jogar cartas de treinador durante o próximo turno.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Thunder Flare",
            ja: "サンダーフレア",
            fr: "Tonnerre",
            de: "Donnerflackern",
            es: "Trueno",
            it: "Flare tuono",
            pt: "Thunder Flare",
          },
          effect: {
            en: "Does 30 damage plus 10 damage times the number of damage counters on Lt. Surge's Jolteon, then flip a coin. If tails, Lt. Surge's Jolteon does 30 damage to itself.",
            ja: "30のダメージと10ダメージの数のダメージ数は、SurgeのJolteon中tのカウンターを行い、コインをひっくり返します。テールの場合、SurgeのJolteon中tはそれ自体に30のダメージを与えます。",
            fr: "Fait 30 dégâts plus 10 dégâts de temps le nombre de compteurs de dégâts sur le lieutenant-jolteon du lieutenant, puis retourne une pièce. Si Tails, Jolteon du lieutenant de surtension se fait 30 dégâts.",
            de: "Fügt 30 Schäden plus 10 Schadenszeiten der Anzahl der Schäden auf Lt. Surge's Jolteon und drehen Sie dann eine Münze. Wenn Schwänze, verursacht Jolteon von Lt. Surge 30 Schäden an sich.",
            es: "Hace 30 daños más 10 veces el número de contadores de daño en Jolteon del teniente Surge, luego voltea una moneda. Si Tails, el Jolteon del teniente Surge hace 30 daños a sí mismo.",
            it: "Fa 30 danni più 10 volte il danno Il numero di contatori di danno sul Jolteon di Lt. Surge, quindi capovolgi una moneta. Se Tails, Jolteon di Lt. Surge fa 30 danni a se stesso.",
            pt: "Causam 30 danos mais 10 danos vezes o número de contadores de dano no Jolteon do tenente Surge e depois vira uma moeda. Se a cauda, Jolteon, do tenente Surge, causa 30 danos a si mesmo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
