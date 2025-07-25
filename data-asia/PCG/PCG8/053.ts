import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Tauros",
         ja: "タウロス",
         fr: "Tauros",
         de: "Tauros",
         es: "Tauros",
         it: "Tauros",
         pt: "Tauros",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [128],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Crush Chance",
            ja: "チャンスをつぶします",
            fr: "Chances d'écraser",
            de: "Crush Chance",
            es: "Casualidad",
            it: "Crush Chance",
            pt: "Chance de esmagamento",
          },
          effect: {
            en: "Once during your turn, when you put Tauros from your hand onto your Bench, you may discard a Stadium card in play.",
            ja: "ターン中に、手からタウロスをベンチに置いたら、スタジアムカードを捨てることができます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez des tauros de votre main sur votre banc, vous pouvez jeter une carte de stade en jeu.",
            de: "Sobald Sie während Ihres Zuges Tauros von Ihrer Hand auf Ihre Bank legen, können Sie eine Stadionkarte im Spiel verwerfen.",
            es: "Una vez durante su turno, cuando pones a Tauros de tu mano en tu banco, puedes descartar una carta del estadio en juego.",
            it: "Una volta durante il tuo turno, quando ti metti Tauros dalla tua mano sulla panchina, puoi scartare una carta dello stadio in gioco.",
            pt: "Uma vez durante o seu turno, quando você coloca Tauros da sua mão em seu banco, poderá descartar uma carta de estádio em jogo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for up to 2 Basic Pokemon and put them onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 Pokémon de base et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Basic -Pokemon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 Pokémon básicos y colóquelos en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo fino a 2 Pokemon di base e mettili sulla panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho até 2 Pokémon básico e coloque -os em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
