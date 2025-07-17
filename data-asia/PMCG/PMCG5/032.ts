import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Golduck",
         ja: "ミスティのゴルダック",
         fr: "Misty's Golduck",
         de: "Mistys Golduck",
         es: "Golduck de Misty",
         it: "Misty's Golduck",
         pt: "Golduck de Misty",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [55],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Electro Beam",
            ja: "電子ビーム",
            fr: "Faisceau d'électrons",
            de: "Elektronenstrahl",
            es: "Haz de electrones",
            it: "Raggio di elettroni",
            pt: "Feixe de elétrons",
          },
          effect: {
            en: "Flip a coin. If tails, discard all Energy cards attached to Misty's Golduck.",
            ja: "コインをひっくり返します。尾の場合、MistyのGolduckに取り付けられたすべてのエネルギーカードを捨ててください。",
            fr: "Retourner une pièce. Si Tails, jetez toutes les cartes d'énergie attachées à Misty's Golduck.",
            de: "Eine Münze drehen. Wenn Schwänze, verwerfen Sie alle Energiekarten, die an Mistys Golduck verbunden sind.",
            es: "Voltea una moneda. SI Tails, deseche todas las tarjetas de energía unidas a Misty's Golduck.",
            it: "Capovolgi una moneta. Se coda, scartare tutte le carte di energia collegate a Golduck di Misty.",
            pt: "Vire uma moeda. Se a cauda, descarte todos os cartões de energia anexados ao Golduck de Misty.",
          },
          damage: 40,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Super Removal",
            ja: "スーパー除去",
            fr: "Super retrait",
            de: "Superentfernung",
            es: "Super eliminación",
            it: "Super rimozione",
            pt: "Super remoção",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokemon that has any Energy cards and discard those Energy cards.",
            ja: "コインをひっくり返します。ヘッドの場合は、エネルギーカードを備えた相手のポケモンのそれぞれに1枚のエネルギーカードを選択し、それらのエネルギーカードを破棄します。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 carte d'énergie attachée à chacun des pokemon de votre adversaire qui contient des cartes d'énergie et jette ces cartes d'énergie.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 Energiemittel -Pokémon Ihres Gegners mit Energiekarten und entsorgen Sie diese Energiekarten.",
            es: "Voltea una moneda. Si se dirige, elija 1 tarjeta de energía adjunta a cada Pokémon de su oponente que tiene alguna tarjeta de energía y descarte esas tarjetas de energía.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 carta di energia collegata a ciascuno dei Pokemon del tuo avversario che ha delle carte di energia e scartare quelle carte energetiche.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 cartão de energia conectado a cada um dos Pokémon do seu oponente que possui cartas de energia e descarte esses cartões de energia.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
