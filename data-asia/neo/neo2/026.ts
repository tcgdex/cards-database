import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown F",
         ja: "f",
         fr: "Non-bas",
         de: "Unown f",
         es: "Sin ojo F",
         it: "Unown f",
         pt: "Unown f",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "FIND [Find]",
            ja: "検索[検索]",
            fr: "Trouver [trouver]",
            de: "Finden [finden]",
            es: "Encontrar [encontrar]",
            it: "Trova [trova]",
            pt: "Encontre [encontre]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have Unown [F], Unown [I], Unown [N], and Unown [D] on your Bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
            ja: "ターン中に（攻撃の前）</em> </em>、[F]、[I]、[i]、[n]、および[d]がベンチで[d]がない場合、デッキをトレーナーカードに検索することができます。そのカードを相手に見せて、それを手に入れてください。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour <em> (Avant votre attaque) </em>, si vous avez unwn [f], non-bass. Montrez cette carte à votre adversaire, puis mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Sie unown [f], unown [i], unown [n] und unown [d] auf Ihrer Bank haben, können Sie Ihr Deck nach einer Trainerkarte durchsuchen. Zeigen Sie diese Karte Ihrem Gegner und geben Sie sie dann in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si no tiene [f], sin duda [i], sin duda [n] y sin duda [d] en su banco, puede buscar en su mazo una tarjeta de entrenador. Muestre esa carta a tu oponente, luego póngala en tu mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se non hai [f], unwnown [i], unwnown [n] e unwnown [d] in panchina, puoi cercare nel tuo mazzo una carta di allenamento. Mostra quella scheda al tuo avversario, quindi mettila in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tem [f], unido [i], unown [n] e unw [d] em seu banco, você pode pesquisar no seu baralho uma carta de treinador. Mostre esse cartão ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
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

      variants: [
        {
          type: "normal",
        },
      ],
};
