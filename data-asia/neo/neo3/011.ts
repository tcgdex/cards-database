import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Ho-Oh",
         ja: "ho-oh",
         fr: "Ho-oh",
         de: "Ho-oh",
         es: "Ho-oh",
         it: "Ho-oh",
         pt: "Ho-oh",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [250],
      hp: 90,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Stoke",
            ja: "ストーク",
            fr: "Alimenter",
            de: "Schüren",
            es: "Cebar",
            it: "Stoke",
            pt: "Stoke",
          },
          effect: {
            en: "You may search your deck for a Fire Energy card and attach it to Ho-Oh. Shuffle your deck afterward.",
            ja: "デッキを検索して消防剤カードを検索し、Ho-Ohに添付することができます。その後、デッキをシャッフルします。",
            fr: "Vous pouvez rechercher votre deck une carte d'énergie de feu et la fixer à Ho-oh. Mélanger votre deck par la suite.",
            de: "Sie können Ihr Deck nach einer Feuerergiekarte durchsuchen und sie an Ho-oh anbringen. Mischen Sie anschließend Ihr Deck.",
            es: "Puede buscar en su mazo una tarjeta de energía de fuego y adjuntarla a Ho-Oh. Baraja tu mazo después.",
            it: "Puoi cercare nel tuo mazzo una carta energetica antincendio e attaccarla a Ho-oh. Shuffle il tuo mazzo in seguito.",
            pt: "Você pode pesquisar no seu baralho um cartão de energia de incêndio e anexá-lo ao HO-OH. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Sacred Fire",
            ja: "神聖な火",
            fr: "Feu sacré",
            de: "Heiliges Feuer",
            es: "Fuego sagrado",
            it: "Fuoco sacro",
            pt: "Fogo sagrado",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Retourner une pièce. Si les têtes, choisissez un des pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Voltea una moneda. Si se dirige, elija 1 del Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 del Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. Não aplique fraqueza e resistência.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
