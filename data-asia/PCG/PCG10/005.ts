import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Cradily",
         ja: "ゆっくりと",
         fr: "Bêtide",
         de: "Cradily",
         es: "Con cuna",
         it: "Cradiosamente",
         pt: "Infelizmente",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Grass"],
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
            en: "Once during your turn, when you play Cradily from your hand to evolve 1 of your PokÃ©mon, you may search your deck for up to 3 in any combination of Basic PokÃ©mon or Evolution cards. Show them to your opponent and put them into your hand. Shuffle your deck afterward.",
            ja: "ターン中に、手からゆっくりと遊んでPokã©Monの1つを進化させると、基本的なPokã©MonまたはEvolution Cardsの任意の組み合わせでデッキを最大3で検索できます。それらを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous jouez cradilien de votre main pour évoluer 1 de votre poké, vous pouvez rechercher votre jeu jusqu'à 3 dans n'importe quelle combinaison de cartes de base de Poké ou d'évolution. Montrez-leur à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges von Ihrer Hand von Ihrer Hand spielen, um 1 Ihres Poké Mon Mons zu entwickeln, können Sie Ihr Deck in einer beliebigen Kombination aus Basic Poké Mon oder Evolutionskarten bis zu 3 durchsuchen. Zeigen Sie sie Ihrem Gegner und stecken Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando juegas con cradio desde tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu mazo hasta 3 en cualquier combinación de cartas básicas de Poké Mon o Evolution. Muéstralos a tu oponente y póngalos en tu mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando giochi in modo strisciante dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare nel tuo mazzo fino a 3 in qualsiasi combinazione di carte di base Poké o Evolution. Mostrali al tuo avversario e mettili in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você joga inconveniente da sua mão para evoluir 1 do seu Poké Mon, você pode pesquisar no seu baralho por até 3 em qualquer combinação de cartões básicos de Poké Mon ou Evolution. Mostre -os ao seu oponente e coloque -os em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Poison Ring",
            ja: "毒リング",
            fr: "Bague empoisonnée",
            de: "Giftring",
            es: "Anillo de veneno",
            it: "Anello veleno",
            pt: "Anel de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御ポケモンは現在中毒になっています。防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor ahora está envenenado. El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica è ora avvelenato. Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual agora está envenenado. O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
