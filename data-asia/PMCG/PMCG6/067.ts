import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Pidgey (U)",
         ja: "コガのピッジー（u）",
         fr: "Pidgey de Koga (U)",
         de: "Kogas Pidgey (u)",
         es: "Pidgey de Koga (u)",
         it: "Koga's Pidgey (U)",
         pt: "Koga's Pidgey (U)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [16],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Messenger",
            ja: "メッセンジャー",
            fr: "Messager",
            de: "Bote",
            es: "Mensajero",
            it: "Messaggero",
            pt: "Mensageiro",
          },
          effect: {
            en: "Put Koga's Pidgey and all cards attached to it on top of your deck. Then search your deck for any Basic Pokemon or Evolution card not named Koga's Pidgey. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
            ja: "KogaのPidgeyとすべてのカードをデッキの上に置きます。次に、Koga's Pidgeyという名前ではない基本的なポケモンまたはEvolutionカードを検索します。そのカードを相手に見せて、それを手に入れてください。その後、デッキをシャッフルします。",
            fr: "Mettez le Pidgey de Koga et toutes les cartes qui y sont attachées sur votre jeu. Recherchez ensuite votre deck pour toute carte Pokémon ou évolution de base non nommée Pidgey de Koga. Montrez cette carte à votre adversaire, puis mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Setzen Sie Kogas Pidgey und alle Karten auf Ihr Deck. Suchen Sie dann Ihr Deck nach grundlegenden Pokemon- oder Evolutionskarte, die nicht Koga's Pidgey genannt werden. Zeigen Sie diese Karte Ihrem Gegner und geben Sie sie dann in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Ponga el pidgey de Koga y todas las cartas adjuntas en la parte superior de tu mazo. Luego busque en su mazo cualquier Pokémon o tarjeta de evolución básica que no se llame Pidgey de Koga. Muestre esa carta a tu oponente, luego póngala en tu mano. Baraja tu mazo después.",
            it: "Metti Koga's Pidgey e tutte le carte attaccate sul tuo mazzo. Quindi cerca nel tuo mazzo qualsiasi Pokemon di base o Evolution Card non chiamata Koga's Pidgey. Mostra quella scheda al tuo avversario, quindi mettila in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Coloque o Pidgey de Koga e todas as cartas anexadas a ele em cima do seu baralho. Em seguida, procure seu baralho em busca de qualquer carta de Pokemon ou evolução básica que não seja nomeada Pidgey de Koga. Mostre esse cartão ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
