import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados (Delta Species)",
         ja: "ギャラドス（デルタ種）",
         fr: "Gyarados (espèces delta)",
         de: "Gyarados (Delta -Arten)",
         es: "Gyarados (especie delta)",
         it: "Gyarados (Delta Species)",
         pt: "Gyarados (espécies delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 90,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Reactor",
            ja: "デルタリアクター",
            fr: "Réacteur delta",
            de: "Delta Reaktor",
            es: "Reactor delta",
            it: "Delta Reactor",
            pt: "Reator delta",
          },
          effect: {
            en: "As long as any Stadium card with Holon in its name is in play, each of your PokÃ©mon that has Delta on its card does 10 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "ホロンがその名に載っているスタジアムカードが存在している限り、カードにデルタを持っているポカンはそれぞれ、防御するポカンにさらに10ダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Tant que toute carte de stade avec Holon en son nom est en jeu, chacun de votre poké mon qui a delta sur sa carte fait 10 dommages supplémentaires au Poké en défense (avant d'appliquer la faiblesse et la résistance).",
            de: "Solange jede Stadionkarte mit Holon in seinem Namen im Spiel ist, verursacht jeder Ihrer Poké Mon, der Delta auf seiner Karte hat, 10 weitere Schäden an der verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras cualquier tarjeta del estadio con Holon en su nombre esté en juego, cada uno de sus Poké Mon que tiene Delta en su tarjeta hace 10 daños más al Poké Mon defensor (antes de aplicar debilidad y resistencia).",
            it: "Finché è in gioco qualsiasi carta stadio con holon a suo nome, ciascuno dei tuoi poké che ha delta sulla sua carta fa altri 10 danni al monomotore di difesa (prima di applicare debolezza e resistenza).",
            pt: "Enquanto qualquer cartão do estádio com Holon em seu nome estiver em jogo, cada um dos seus Poké -Mon que possui Delta em sua carta causa mais 10 danos ao poké -mon (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Hyper Beam",
            ja: "ハイパービーム",
            fr: "Hyper faisceau",
            de: "Hyperstrahl",
            es: "Hiper viga",
            it: "Hyper Beam",
            pt: "Hyper Beam",
          },
          effect: {
            en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia preso ao Pokémon atual.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Heavy Impact",
            ja: "重い衝撃",
            fr: "Impact",
            de: "Starke Auswirkungen",
            es: "Impacto",
            it: "Forte impatto",
            pt: "Impacto pesado",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
