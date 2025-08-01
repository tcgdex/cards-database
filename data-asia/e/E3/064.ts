import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Kangaskhan",
         ja: "カンガスハン",
         fr: "Kangaskhan",
         de: "Kangaskhan",
         es: "Kangaskhan",
         it: "Kangaskhan",
         pt: "Kangaskhan",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [115],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Baby Outing",
            ja: "赤ちゃんの外出",
            fr: "Sortie de bébé",
            de: "Babyausflug",
            es: "Salida de bebé",
            it: "Gita per bambini",
            pt: "Passeio de bebê",
          },
          effect: {
            en: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward.",
            ja: "デッキのトップ3のカードを見てから、それらのカードの1枚を選択して、手に入れます。その後、残りをデッキにシャッフルします。",
            fr: "Regardez les 3 premières cartes de votre deck, puis choisissez 1 de ces cartes et mettez-la dans votre main. Mercer le reste dans votre deck par la suite.",
            de: "Schauen Sie sich die Top 3 -Karten Ihres Decks an und wählen Sie dann 1 dieser Karten aus und legen Sie sie in Ihre Hand. Mischen Sie den Rest danach in Ihr Deck.",
            es: "Mire las 3 cartas principales de su mazo, y luego elija 1 de esas cartas y póngala en su mano. Morda el resto en tu mazo después.",
            it: "Guarda le prime 3 carte del tuo mazzo, quindi scegli 1 di quelle carte e mettile in mano. Shuffle il resto nel tuo mazzo in seguito.",
            pt: "Veja as três principais cartas do seu baralho e escolha 1 dessas cartas e coloque -as em sua mão. Embaralhe o resto no seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 30,
        },
      ],

      retreat: 2,

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
