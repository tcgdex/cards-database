import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Clefairy",
         ja: "エリカのクリーフ",
         fr: "Clefairy d'Erika",
         de: "Erikas Clefairy",
         es: "Clefairy de Erika",
         it: "Clefairy di Erika",
         pt: "Clefairy de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [35],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Lunar Power",
            ja: "月の力",
            fr: "Puissance lunaire",
            de: "Mondkraft",
            es: "Poder lunar",
            it: "Potere lunare",
            pt: "Poder lunar",
          },
          effect: {
            en: "Flip a coin. If heads, search your deck for a card that evolves from 1 of your Benched Pokemon and put that card on that Pokemon. (This counts as evolving that Pokemon.) Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンの1つから進化するカードをデッキに検索し、そのカードをそのポケモンに置きます。 （これはポケモンの進化としてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre deck une carte qui évolue à partir de 1 de votre pokemon bancé et mettez cette carte sur ce Pokémon. (Cela compte comme évoluant ce Pokémon.) Tandez votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte, die sich von 1 Ihres Bank -Pokemon entwickelt, und legen Sie diese Karte auf dieses Pokémon. (Dies zählt so, dass sich dieses Pokemon weiterentwickelt.) Mischen Sie danach Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, busque en su mazo una carta que evolucione de 1 de su Pokémon de banca y coloque esa carta en ese Pokémon. (Esto cuenta como evolucionando a ese Pokémon). Arriba tu mazo después.",
            it: "Capovolgi una moneta. Se la testa, cerca nel tuo mazzo una carta che si evolve da 1 del tuo Pokemon in panchina e metti quella carta su quel Pokemon. (Questo conta come in evoluzione di quel Pokemon.) Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, procure um cartão para um cartão que evolui de 1 do seu Pokémon em banco e coloque esse cartão naquele Pokémon. (Isso conta como evoluindo esse Pokemon.) Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Moon Kick",
            ja: "ムーンキック",
            fr: "Coup de pied de lune",
            de: "Mondkick",
            es: "Patada lunar",
            it: "Calcio di luna",
            pt: "Kick da lua",
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
