import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Bulbasaur",
         ja: "エリカのブルバサウルス",
         fr: "Bulbasaur d'Erika",
         de: "Erikas Bulbasaur",
         es: "Bulbasaur de Erika",
         it: "Bulbasaur di Erika",
         pt: "Bulbasaur de Erika",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [1],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Seed",
            ja: "睡眠の種",
            fr: "Graine de sommeil",
            de: "Schlafsamen",
            es: "Semilla del sueño",
            it: "Seme di sonno",
            pt: "Semente de sono",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Errand-Running",
            ja: "用事が走る",
            fr: "Des courses de courses",
            de: "Besorgnis",
            es: "Recado",
            it: "Commissioni",
            pt: "Recurso de recados",
          },
          effect: {
            en: "Flip a coin. If heads, you may search your deck for a Trainer card. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合は、デッキを検索してトレーナーカードを検索できます。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, vous pouvez rechercher votre deck pour une carte d'entraînement. Montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Sie Ihr Deck nach einer Trainerkarte durchsuchen. Zeigen Sie es Ihrem Gegner und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, puede buscar en su mazo una tarjeta de entrenador. Muéstralo a tu oponente y póngalo en tu mano. Baraja tu mazo después.",
            it: "Capovolgi una moneta. Se la testa, puoi cercare nel tuo mazzo una carta dell'allenatore. Mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, você poderá pesquisar no seu baralho por uma carta de treinador. Mostre ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
