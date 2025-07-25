import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Fearow (Delta Species)",
         ja: "恐ろしい（デルタ種）",
         fr: "Fearow (espèces delta)",
         de: "Fearow (Delta -Arten)",
         es: "Fearow (especie delta)",
         it: "Fearow (Delta Species)",
         pt: "Fearow (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [22],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Sign",
            ja: "デルタサイン",
            fr: "Signe delta",
            de: "Delta -Zeichen",
            es: "Signo delta",
            it: "Segno delta",
            pt: "Sinal delta",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a PokÃ©mon that has  on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Delta Sign PokÃ©-Power each turn. This power can't be used if Fearow is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、そのカードにあるPokã©Monを検索し、それを相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。ターンごとに1つ以上のデルタサインPokã©-Powerを使用することはできません。 Fearowが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un poké mon qui a sur sa carte, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus de 1 Poké de Delta Signe à chaque tour. Ce pouvoir ne peut pas être utilisé si Fearow est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem Poké Mon auf der Karte suchen, es Ihrem Gegner zeigen und es in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Delta Sign Poké-Kraft in jeder Runde verwenden. Diese Kraft kann nicht eingesetzt werden, wenn Fearow von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo un Poké Mon que tiene en su carta, mostrarlo a su oponente y ponerlo en su mano. Baraja tu mazo después. No puede usar más de 1 signo delta Poké, potencia en cada turno. Este poder no se puede usar si Fearow se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un poké mon che ha sulla sua carta, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito. Non è possibile utilizzare più di 1 Delta Segno Pokã ©-Power ogni turno. Questo potere non può essere utilizzato se FarEow è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho um Poké Mon que possui em seu cartão, mostrá -lo ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois. Você não pode usar mais de 1 sinal delta Poké-Power a cada turno. Esse poder não pode ser usado se Fearow for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Pierce",
            ja: "ピアス",
            fr: "Percer",
            de: "Pierce",
            es: "Atravesar",
            it: "Forare",
            pt: "Pierce",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
