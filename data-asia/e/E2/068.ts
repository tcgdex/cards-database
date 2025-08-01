import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Umbreon - 068/092",
         ja: "Umbreon -068/092",
         fr: "Umbreon - 068/092",
         de: "Umbreon - 068/092",
         es: "Umbreon - 068/092",
         it: "Umbreon - 068/092",
         pt: "Umbreon - 068/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 80,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dark Moon",
            ja: "ダークムーン",
            fr: "Lune sombre",
            de: "Dunkler Mond",
            es: "Luna oscura",
            it: "Luna oscura",
            pt: "Lua escura",
          },
          effect: {
            en: "As long as Umbreon is your Active Pokmon and has a Darkness Energy attached to it, once during your turn <em>(before your attack)</em>, you may look at your opponent's hand. Choose from it a number of cards up to the number of Darkness Energy attached to Umbreon and shuffle them into your opponent's deck. Your opponent then draws the same number of cards from his or her deck. This power can't be used if Umbreon is affected by a Special Condition.",
            ja: "Umbreonがあなたのアクティブなポクモンであり、それに闇のエネルギーが付いている限り、ターン<em>の間に（攻撃の前に）</em> </em>になると、相手の手を見ることができます。それから、Umbreonに取り付けられた暗闇のエネルギーの数まで多くのカードを選択し、それらを相手のデッキにシャッフルします。その後、相手は自分のデッキから同じ数のカードを描きます。 Umbreonが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Tant que Umbreon est votre Pokmon actif et a une énergie d'obscurité qui y est attachée, une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez regarder la main de votre adversaire. Choisissez parmi un certain nombre de cartes jusqu'au nombre d'énergie de l'obscurité attachée à Umbreon et mélangez-les dans le deck de votre adversaire. Votre adversaire tire ensuite le même nombre de cartes de son deck. Cette puissance ne peut pas être utilisée si Umbreon est affecté par une condition spéciale.",
            de: "Solange Umbreon Ihr aktives Pokmon ist und eine Dunkelheitsenergie mit sich bringt, können Sie einmal während Ihres Zuges <em> (vor Ihrem Angriff) </em> die Hand Ihres Gegners betrachten. Wählen Sie eine Reihe von Karten bis zur Anzahl der an Umbreon verbundenen Dunkelheitsenergie und mischen Sie sie in das Deck Ihres Gegners. Ihr Gegner zeichnet dann die gleiche Anzahl von Karten von seinem Deck. Diese Leistung kann nicht angewendet werden, wenn Umbreon von einem besonderen Zustand betroffen ist.",
            es: "Mientras Umbreon sea su Pokmon activo y tenga una energía de oscuridad unida a ella, una vez durante su turno <em> (antes de su ataque) </em>, puede mirar la mano de su oponente. Elija entre ella una serie de cartas hasta la cantidad de energía de oscuridad unida a Umbreon y las arrastre en el mazo de su oponente. Tu oponente extrae el mismo número de cartas de su mazo. Esta potencia no se puede usar si Umbreon se ve afectado por una condición especial.",
            it: "Finché Umbreon è il tuo Pokmon attivo e ha un'energia oscura ad esso attaccata, una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi guardare la mano del tuo avversario. Scegli tra un numero di carte fino al numero di energia oscura attaccata a Umbreon e mescola nel mazzo del tuo avversario. Il tuo avversario disegna quindi lo stesso numero di carte dal suo mazzo. Questa potenza non può essere utilizzata se Umbreon è influenzato da una condizione speciale.",
            pt: "Enquanto o Umbreon for o seu Pokmon ativo e tiver uma energia de escuridão ligada a ele, uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode olhar para a mão do seu oponente. Escolha uma série de cartas até o número de energia da escuridão anexada ao Umbreon e embaralhe -as no baralho do seu oponente. Seu oponente então desenha o mesmo número de cartas de seu baralho. Esse poder não pode ser usado se umbreon for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Shadow Bind",
            ja: "シャドウバインド",
            fr: "Liaison de l'ombre",
            de: "Schattenbindung",
            es: "Sombra Bind",
            it: "Bind ombra",
            pt: "Shadow Bind",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
