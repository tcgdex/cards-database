import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Wurmple",
         ja: "Wurmple",
         fr: "Wurmple",
         de: "Wurmlich",
         es: "Wurmple",
         it: "Wurmple",
         pt: "Wurmple",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [265],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "Search your deck for a card that evolves from Wurmple and put it on Wurmple. (This counts as evolving Wurmple.) Shuffle your deck afterward.",
            ja: "Wurmpleから進化するカードをデッキで検索し、Wurmpleに置いてください。 （これは進化する翼としてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue à partir de Wurmple et mettez-la sur Wurmple. (Cela compte comme en évolution de Wurmple.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von Wurmple entwickelt, und legen Sie sie auf Wurmple. (Dies gilt als sich weiterentwickeln.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Wurmple y la ponga en Wurmple. (Esto cuenta como en evolución de Wurmple.) Arrobable tu mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Wurmple e mettila su Wurmple. (Questo conta come in evoluzione.) Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por uma carta que evolui de Wurmple e coloque -a no Wurmple. (Isso conta como evoluindo o Wurmple.) Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Miracle Essence",
            ja: "奇跡の本質",
            fr: "Essence miracle",
            de: "Wunderessenz",
            es: "Esencia milagrosa",
            it: "Miracle Essence",
            pt: "Essência milagrosa",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 Special Condition. Each Defending Pokemon is now affected by that Special Condition.",
            ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。それぞれの防御ポケモンは現在、その特別な状態の影響を受けています。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 état spécial. Chaque Pokémon défendant est désormais affecté par cette condition spéciale.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 besondere Bedingung. Jedes Verteidigungspokémon ist jetzt von diesem besonderen Zustand betroffen.",
            es: "Voltea una moneda. Si se dirige, elija 1 condición especial. Cada Pokémon defensor ahora se ve afectado por esa condición especial.",
            it: "Capovolgi una moneta. Se le teste, scegli 1 condizione speciale. Ogni Pokemon difensore è ora influenzato da quella condizione speciale.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 condição especial. Cada Pokemon atual agora é afetado por essa condição especial.",
          },
        },
      ],

      retreat: 1,

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
