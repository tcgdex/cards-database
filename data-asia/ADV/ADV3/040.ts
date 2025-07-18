import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Vibrava",
         ja: "ビブラバ",
         fr: "Vibrava",
         de: "Vibrava",
         es: "Vibrava",
         it: "Vibrava",
         pt: "Vibrava",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [329],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Quick Charge",
            ja: "クイックチャージ",
            fr: "Charge rapide",
            de: "Schnelle Gebühr",
            es: "Carga rápida",
            it: "Carica rapida",
            pt: "Carga rápida",
          },
          effect: {
            en: "Search your deck for up to 3 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、最大3種類の基本エネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu jusqu'à 3 types différents de cartes d'énergie de base, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 3 verschiedenen Arten von Basiskarten, zeigen Sie sie Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 3 tipos diferentes de cartas de energía básicas, muéstrelos a su oponente y póngalas en tu mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 3 diversi tipi di carte energia di base, mostrale al tuo avversario e mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 3 tipos diferentes de cartões básicos de energia, mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Lightning"],
          name: {
            en: "Dragon Spark",
            ja: "ドラゴンスパーク",
            fr: "Dragon étincelle",
            de: "Drachenfunke",
            es: "Chispa de dragón",
            it: "Dragon Spark",
            pt: "Dragon Spark",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokemon. (Don't apply Weakness and Resistance to Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに20のダメージを与えます。 （ベンチ付きポケモンに弱さや抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez pas la faiblesse et la résistance aux Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn dieser Angriff den Pokémon Ihres Gegners 20 Schäden an den Pokémon Ihres Gegners verursacht. (Wenden Sie keine Schwäche und Widerstand gegen ein Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños a cada Pokémon de tu oponente. (No apliques debilidad y resistencia al Pokémon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a ciascuno dei Pokemon del tuo avversario. (Non applicare debolezza e resistenza ai Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos a cada um dos Pokémon do seu oponente. (Não aplique fraqueza e resistência ao Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
