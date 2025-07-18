import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown",
         ja: "未知",
         fr: "À la main",
         de: "Unown",
         es: "Sin ojo",
         it: "Unto",
         pt: "Unido",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Shuffle",
            ja: "シャッフル",
            fr: "Mélanger",
            de: "Shuffle",
            es: "Barajar",
            it: "Shuffle",
            pt: "Embaralhar",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前）になったら、デッキを検索して別のデッキを検索して、未使用で切り替えることができます。 （未発生のダメージカウンター、特別な条件、およびその影響に添付されたカードは、新しいPokã©Mon。）にある場合は、デッキの上に置かれていません。その後、デッキをシャッフルします。ターンごとに1つ以上のシャッフルポカ - パワーを使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck un autre et le changer avec non-bas. (Toutes les cartes attachées aux compteurs de dégâts non-bas, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokã © lun.) Si vous le faites, mettez Unwed sur votre jeu. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus d'un shuffle poké-puissance à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einem anderen Unown durchsuchen und es mit Unown wechseln. (Alle Karten, die an Unown, Schadenszähler, besonderen Bedingungen und Auswirkungen angeschlossen sind, befinden sich jetzt auf dem neuen Poké mon.) Wenn Sie dies tun, legen Sie es auf Ihr Deck. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Shuffle Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo otro Unlow y cambiarlo sin Own. (Cualquier carta adjunta a los contadores de daño, contadores de daños, condiciones especiales y efectos en ellas ahora están en el nuevo Poké Mon.) Si lo hace, coloque Unlow en la parte superior de su mazo. Baraja tu mazo después. No puede usar más de 1 poke-potencia de poke en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo un altro Unwnown e cambiarlo con Unown. (Eventuali carte collegate a Unown, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo poké mon.) Se lo fai, metti un po 'in cima al tuo mazzo. Shuffle il tuo mazzo in seguito. Non puoi usare più di 1 shuffle poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho por outro mundo e trocá -lo com o UNOWN. (Quaisquer cartões anexados ao Unwnow, contadores de danos, condições especiais e efeitos agora estão no novo Poké Mon.) Se o fizer, coloque o UNOWN em cima do seu baralho. Afaste seu baralho depois. Você não pode usar mais de 1 Shuffle Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          effect: {
            en: "Choose a card from your hand and put it face down. Your opponent guesses if that card is a Pokemon, Trainer, or Energy card.  Reveal the card. If your opponent guessed wrong, draw 2 cards. Put the card back into your hand.",
            ja: "あなたの手からカードを選択して、それを表面下に置いてください。相手は、そのカードがポケモン、トレーナー、またはエネルギーカードであるかどうかを推測します。  カードを公開します。対戦相手が間違っていると推測した場合は、2枚のカードを描きます。カードを手に戻します。",
            fr: "Choisissez une carte dans votre main et placez-la face vers le bas. Votre adversaire devine si cette carte est un pokemon, un entraîneur ou une carte d'énergie.  Révéler la carte. Si votre adversaire a tort, dessinez 2 cartes. Remettez la carte dans votre main.",
            de: "Wählen Sie eine Karte von Ihrer Hand aus und legen Sie es versichert nach unten. Ihr Gegner vermutet, ob diese Karte ein Pokemon, Trainer oder eine Energiekarte ist.  Die Karte enthüllen. Wenn Ihr Gegner falsch vermutet hat, zeichnen Sie 2 Karten. Legen Sie die Karte wieder in Ihre Hand.",
            es: "Elija una tarjeta de su mano y póngala boca abajo. Tu oponente adivina si esa carta es un Pokémon, entrenador o tarjeta de energía.  Revelar la tarjeta. Si tu oponente adivinó mal, dibuje 2 cartas. Vuelva a colocar la tarjeta en su mano.",
            it: "Scegli una carta dalla tua mano e mettila a faccia in giù. Il tuo avversario indovina se quella carta è un pokemon, un allenatore o una carta energetica.  Rivelare la carta. Se il tuo avversario ha indovinato, disegna 2 carte. Rimetti la carta in mano.",
            pt: "Escolha um cartão da sua mão e coloque -o de bruços. Seu oponente adivinha se esse cartão é um Pokémon, treinador ou cartão de energia.  Revelar o cartão. Se o seu oponente adivinhou errado, desenhe 2 cartas. Coloque o cartão de volta na sua mão.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
