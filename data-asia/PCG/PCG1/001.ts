import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Caterpie",
         ja: "キャタピー",
         fr: "Chenille",
         de: "Caterpie",
         es: "Orugada",
         it: "Caterpia",
         pt: "Caterpie",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [10],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Signs of Evolution",
            ja: "進化の兆候",
            fr: "Signes d'évolution",
            de: "Zeichen der Evolution",
            es: "Signos de evolución",
            it: "Segni di evoluzione",
            pt: "Sinais de evolução",
          },
          effect: {
            en: "Search your deck for a Metapod and a Butterfree card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "メタポッドとバタフリーカードをデッキに検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un métapod et une carte papillon, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Metapod und einer Butterfree -Karte, zeigen Sie sie Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Metapod y una carta sin ButterFree, muéstrelos a su oponente y póngalos en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un metapod e una carta Butterfree, mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um metapod e um cartão sem borboleta, mostre -os ao seu oponente e coloque -os na sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "String Shot",
            ja: "ストリングショット",
            fr: "Tir à cordes",
            de: "Saitenschuss",
            es: "Disparo",
            it: "Scatto",
            pt: "Tiro de corda",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
