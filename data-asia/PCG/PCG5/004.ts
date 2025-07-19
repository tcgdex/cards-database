import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Grimer",
         ja: "グリマー",
         fr: "Sinistre",
         de: "Schmutz",
         es: "Mueca",
         it: "Grimer",
         pt: "Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Ascension",
            ja: "上昇",
            fr: "Ascension",
            de: "Aufstieg",
            es: "Ascensión",
            it: "Ascensione",
            pt: "Ascensão",
          },
          effect: {
            en: "Search your deck for a card that evolves from Grimer and put it onto Grimer. (This counts as evolving Grimer.) Shuffle your deck afterward.",
            ja: "グリマーから進化するカードをデッキで検索し、グリマーに置きます。 （これは進化するグリマーとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck une carte qui évolue à partir de grimé et mettez-la sur Grimer. (Cela compte comme un squestre évolutif.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von Grimer entwickelt, und legen Sie sie auf Grimer. (Dies gilt als sich entwickelnde Schmutz.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Grimer y póngala en Grimer. (Esto cuenta como un muisero evolucionante). Arriba su mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Grimer e mettila su Grimer. (Questo conta come Grimer in evoluzione.) Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho por uma carta que evolui de Grimer e coloque -a em Grimer. (Isso conta como uma careta em evolução.) Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sludge Toss",
            ja: "スラッジトス",
            fr: "Lancer des boues",
            de: "Schlammwurf",
            es: "Lanzar lodos",
            it: "Lancio di fanghi",
            pt: "Lodo",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
