import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Charizard (Delta Species)",
         ja: "カリザード（デルタ種）",
         fr: "Charizard (espèces delta)",
         de: "Charizard (Delta -Arten)",
         es: "Charizard (especie delta)",
         it: "Charizard (Delta Species)",
         pt: "Charizard (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Peal of Thunder",
            ja: "雷の皮",
            fr: "Coup de tonnerre",
            de: "Donnern",
            es: "Trueno",
            it: "Peal of Thunder",
            pt: "Peal of Thunder",
          },
          effect: {
            en: "Once during your turn, when you play Charizard from your hand to evolve 1 of your PokÃ©mon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your PokÃ©mon. Discard the other cards.",
            ja: "ターン中に、手からチャリザードをプレイしてポカンの1つを進化させると、デッキのトップ5カードを見て、好きなだけエネルギーカードを選択し、ポケモンの1つに取り付けます。他のカードを破棄します。",
            fr: "Une fois pendant votre tour, lorsque vous jouez Charizard de votre main pour évoluer 1 de votre poké, vous pouvez regarder les 5 premières cartes de votre deck, choisir autant de cartes d'énergie que vous le souhaitez et les attacher à 1 de votre pokã © Mon. Jeter les autres cartes.",
            de: "Sobald Sie in Ihrem Zug, wenn Sie Charizard von Ihrer Hand spielen, um 1 Ihrer Pokémon zu entwickeln, sehen Sie sich die Top 5 Karten Ihres Decks an, wählen Sie so viele Energiekarten wie Sie möchten, und befestigen Sie sie an 1 Ihrer Poké Mon Mon. Die anderen Karten wegwerfen.",
            es: "Una vez durante su turno, cuando juegas a Charizard desde tu mano para evolucionar 1 de tu Poké Mon, puedes mirar las 5 cartas principales de tu mazo, elige tantas cartas de energía como quieras y adjuntarlas a 1 de tu Poké Mon. Deseche las otras cartas.",
            it: "Una volta durante il tuo turno, quando giochi a Charizard dalla tua mano per evolvere 1 del tuo poké mon, puoi guardare le prime 5 carte del tuo mazzo, scegli tutte le carte energetiche che vuoi e attaccarle a 1 del tuo poké mon. Scartare le altre carte.",
            pt: "Uma vez durante o seu turno, quando você toca Charizard da sua mão para evoluir 1 do seu Poké Mon, você pode olhar para as 5 principais cartas do seu baralho, escolher quantas cartas de energia quiser e anexá -las a 1 do seu Poké Mon. Descarte os outros cartões.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal", "Metal", "Colorless"],
          name: {
            en: "Metal Burn",
            ja: "金属燃焼",
            fr: "Brûlure en métal",
            de: "Metallbrand",
            es: "Quemadura de metal",
            it: "Bruciatura in metallo",
            pt: "Queima de metal",
          },
          effect: {
            en: "Discard all Metal Energy attached to Charizard.",
            ja: "Charizardに取り付けられたすべての金属エネルギーを捨てます。",
            fr: "Jeter toute l'énergie métallique attachée au charizard.",
            de: "Verwerfen Sie alle an Charizard befestigten Metallenergie.",
            es: "Deseche toda la energía de metal unida a Charizard.",
            it: "Scartare tutta l'energia metallica attaccata a Charizard.",
            pt: "Descarte toda a energia metálica anexada a Charizard.",
          },
          damage: 120,
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
