import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu",
         ja: "ライチュ",
         fr: "Raichu",
         de: "Raichu",
         es: "Raichu",
         it: "Raichu",
         pt: "Raichu",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Recharge",
            ja: "充電",
            fr: "Recharger",
            de: "Aufladen",
            es: "Recargar",
            it: "Ricaricare",
            pt: "Recarregar",
          },
          effect: {
            en: "Search your deck for up to 2 Lightning Energy cards and attach them to Raichu. Shuffle your deck afterward.",
            ja: "デッキを最大2枚の稲妻エネルギーカードで検索し、ライチュに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 cartes d'énergie Lightning et attachez-les à Raichu. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Lightning Energy -Karten und befestigen Sie sie an Raichu. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 cartas de energía de Lightning y adhiérase a Raichu. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 carte di energia Lightning e attaccale a Raichu. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 cartas de energia da Rightning e anexe -as a Raichu. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunder Reflection",
            ja: "サンダーリフレクション",
            fr: "Réflexion du tonnerre",
            de: "Donnerreflexion",
            es: "Reflexión del trueno",
            it: "Riflessione del tuono",
            pt: "Reflexão do trovão",
          },
          effect: {
            en: "You may move any number of Lightning Energy cards attached to Raichu to another of your Pokemon.",
            ja: "Raichuに取り付けられた数の稲妻エネルギーカードを別のポケモンに移動できます。",
            fr: "Vous pouvez déplacer n'importe quel nombre de cartes d'énergie Lightning attachées à Raichu à un autre de vos Pokémon.",
            de: "Sie können eine beliebige Anzahl von Blitzelenergiekarten an Raichu an ein anderes Ihrer Pokémon verschieben.",
            es: "Puede mover cualquier cantidad de tarjetas de energía Lightning unidas a Raichu a otro de su Pokémon.",
            it: "Puoi spostare qualsiasi numero di carte di energia Lightning collegate a Raichu a un'altra del tuo Pokemon.",
            pt: "Você pode mover qualquer número de cartões de energia da Rightning anexados a Raichu a outro de seu Pokémon.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
