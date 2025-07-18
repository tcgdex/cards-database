import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Glalie",
         ja: "グラリー",
         fr: "Gllay",
         de: "Glalie",
         es: "Glalie",
         it: "Glalie",
         pt: "Glalie",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [362],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Ice Wall",
            ja: "氷の壁",
            fr: "Mur de glace",
            de: "Eiswand",
            es: "Muro de hielo",
            it: "Muro di ghiaccio",
            pt: "Parede de gelo",
          },
          effect: {
            en: "Any damage done to Glalie by attacks from your opponent's PokÃ©mon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
            ja: "相手のポカモンからの攻撃によってグラリーに与えられた損害は、それに取り付けられた特別なエネルギーカードが40減少します（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à GLALIE par les attaques de la Poké de votre adversaire avec des cartes d'énergie spéciales qui y sont attachées sont réduites de 40 (après avoir appliqué la faiblesse et la résistance).",
            de: "Alle Schäden an Glalie durch Angriffe aus dem Poké mon Ihres Gegners mit alle damit verbundenen speziellen Energiekarten werden um 40 reduziert (nach Anbringen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Glalie por ataques del Poké Mon de tu oponente con cualquier carta de energía especial unida se reduce en 40 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Glalie dagli attacchi del poké del tuo avversario con eventuali carte di energia speciali attaccate è ridotto di 40 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Glalie por ataques do Poké Mon do seu oponente com qualquer cartões de energia especial anexados a ele é reduzido em 40 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Heavy Blizzard",
            ja: "重いブリザード",
            fr: "Blizzard lourd",
            de: "Schwerer Schneesturm",
            es: "Pesada tormenta",
            it: "Blizzard pesante",
            pt: "Blizzard pesado",
          },
          effect: {
            en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、相手のベンチポケモンのそれぞれに1つのダメージカウンターを入れます。",
            fr: "Retourner une pièce. Si les têtes, mettez 1 compteur de dégâts sur chacun des pokemon bancés de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, legen Sie 1 Schadenschalter auf das Bankpokémon Ihres Gegners.",
            es: "Voltea una moneda. Si se dirige, coloque 1 contador de daño en cada Pokémon de banca de su oponente.",
            it: "Capovolgi una moneta. Se la testa, metti 1 contatore di danni su ciascuno dei Pokemon in panchina del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, coloque 1 contador de danos em cada um dos Pokémon bancos do seu oponente.",
          },
          damage: 50,
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
