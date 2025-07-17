import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown H",
         ja: "hなしh",
         fr: "Non-bas",
         de: "Unown h",
         es: "Sin own h",
         it: "Unown h",
         pt: "Unown h",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "HELP [Help]",
            ja: "ヘルプ[ヘルプ]",
            fr: "Aide [Aide]",
            de: "Hilfe [Hilfe]",
            es: "Ayuda [ayuda]",
            it: "Aiuto [aiuto]",
            pt: "Ajuda [Ajuda]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have Unown [H], Unown [E], Unown [L], and Unown [P] on your Bench, you may shuffle your hand into your deck, then draw a new hand of the same number of cards.",
            ja: "ターン中に（攻撃の前に）</em> </em>、[H]、[e]、[e]、[l]、および[p]がベンチで[p]がない場合は、手をシャッフルして、同じ数のカードの新しい手を描くことができます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si vous avez non bassé [h], non-bas [e], non-bas [l] et non-bas [p] sur votre banc, vous pouvez remuer votre main dans votre deck, puis dessiner une nouvelle main du même nombre de cartes.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em> sind, wenn Sie unown [h], unown [e], unown [l] und unown [p] auf Ihrer Bank haben, können Sie Ihre Hand in Ihr Deck mischen und dann eine neue Hand der gleichen Kartenzahl zeichnen.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si no tiene [H], sin duda [e], sin duda [l] y sin duda [p] en su banco, puede arrastrar su mano en su mazo, luego dibujar una nueva mano de la misma cantidad de cartas.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se non hai [h], unwnown [e], unwnown [l] e unwnown [p] sulla panchina, puoi mescolare la mano nel tuo mazzo, quindi disegnare una nuova mano dello stesso numero di carte.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tem [h], unido [e], Unwnow [l] e unido [p] em seu banco, você poderá embaralhar sua mão no baralho e desenhar uma nova mão do mesmo número de cartas.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
