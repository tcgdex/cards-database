import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Meganium (Delta Species)",
         ja: "メガニウム（デルタ種）",
         fr: "Meganium (espèces delta)",
         de: "Meganium (Delta -Arten)",
         es: "Meganium (especie delta)",
         it: "Meganium (Delta Species)",
         pt: "Meganium (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [154],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Evolutionary Call",
            ja: "進化の呼びかけ",
            fr: "Appel évolutif",
            de: "Evolutionsruf",
            es: "Llamada evolutiva",
            it: "Chiamata evolutiva",
            pt: "Chamada evolutiva",
          },
          effect: {
            en: "Once during your turn, when you play Meganium from your hand to evolve 1 of your PokÃ©mon, you may search your deck for up to 3 in any combination of Basic PokÃ©mon or Evolution cards. Show them to your opponent and put them into your hand. Shuffle your deck afterward.",
            ja: "ターン中に、手からMeganiumをプレイしてPokã©Monの1つを進化させると、基本的なPokã©MonまたはEvolutionカードの任意の組み合わせでデッキを最大3で検索できます。それらを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous jouez du méganium de votre main pour évoluer 1 de votre poké, vous pouvez rechercher votre deck jusqu'à 3 dans n'importe quelle combinaison de cartes de base de Poké ou d'évolution. Montrez-leur à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges Meganium aus Ihrer Hand spielen, um 1 Ihrer Poké mon zu entwickeln, können Sie Ihr Deck in einer beliebigen Kombination aus Basic Poké Mon oder Evolutionskarten bis zu 3 durchsuchen. Zeigen Sie sie Ihrem Gegner und stecken Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando juegas a Meganium desde tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu mazo hasta 3 en cualquier combinación de cartas básicas de Poké Mon o Evolution. Muéstralos a tu oponente y póngalos en tu mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando giochi a Meganium dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare nel tuo mazzo fino a 3 in qualsiasi combinazione di carte di base Poké o Evolution. Mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você toca meganium da sua mão para evoluir 1 do seu Poké Mon, você pode pesquisar no seu baralho por até 3 em qualquer combinação de cartões básicos de Poké Mon ou Evolution. Mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Delta Reduction",
            ja: "デルタの削減",
            fr: "Réduction de delta",
            de: "Delta -Reduktion",
            es: "Reducción del delta",
            it: "Riduzione delta",
            pt: "Redução delta",
          },
          effect: {
            en: "During your opponent's next turn, any damage done by attacks from the Defending Pokemon is reduced by 30 (before applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、防御ポケモンからの攻撃によって与えられた損害は30増加します（脱力感と抵抗を適用する前に）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé par les attaques du Pokémon en défense est réduit de 30 (avant d'appliquer la faiblesse et la résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden durch Angriffe des verteidigenden Pokémon um 30 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho por los ataques del Pokémon defensor se reduce en 30 (antes de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno causato dagli attacchi del Pokemon in carica viene ridotto di 30 (prima di applicare la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado por ataques do pokemon atual é reduzido em 30 (antes de aplicar fraqueza e resistência).",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Mega Impact",
            ja: "メガインパクト",
            fr: "Méga impact",
            de: "Mega -Auswirkungen",
            es: "Mega Impacto",
            it: "Mega impatto",
            pt: "Mega impacto",
          },
          damage: 60,
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
