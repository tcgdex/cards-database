import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Flaaffy",
         ja: "暗いフラフィ",
         fr: "Dark Flaaffy",
         de: "Dunkler Flaaffy",
         es: "Dark flaffy",
         it: "Flaaffy scuro",
         pt: "Flaaffy escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [180],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
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
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Stun Wave",
            ja: "スタンウェーブ",
            fr: "Vague d'étourdissement",
            de: "Betäubungswelle",
            es: "Ola de aturdimiento",
            it: "STUNIGLIA",
            pt: "Onda de atordoamento",
          },
          effect: {
            en: "If the Defending Pokemon has a Pokemon Power, that power stops working until the end of your next turn.",
            ja: "防衛ポケモンにポケモンのパワーがある場合、そのパワーは次のターンの終わりまで機能しなくなります。",
            fr: "Si le Pokémon en défense a une puissance Pokémon, cette puissance cesse de fonctionner jusqu'à la fin de votre prochain tour.",
            de: "Wenn das verteidigende Pokemon über eine Pokemon -Leistung verfügt, funktioniert diese Leistung bis zum Ende Ihrer nächsten Kurve nicht mehr.",
            es: "Si el Pokémon defensor tiene una potencia de Pokémon, esa potencia deja de funcionar hasta el final de su próximo turno.",
            it: "Se il Pokemon in carica ha un Pokemon Power, quel potere smette di funzionare fino alla fine del tuo prossimo turno.",
            pt: "Se o Pokémon atual tiver uma potência de Pokemon, esse poder para de funcionar até o final do seu próximo turno.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
