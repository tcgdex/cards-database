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
            en: "If your opponent's Bench isn't full, look at his or her hand. Choose 1 Basic Pokemon you find there and put it onto your opponent's Bench. Then, switch it with the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "対戦相手のベンチがいっぱいでない場合は、手を見てください。そこにある基本的なポケモンを1つ選択し、相手のベンチに置きます。次に、防御ポケモンで切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Si le banc de votre adversaire n'est pas plein, regardez sa main. Choisissez 1 pokemon de base que vous y trouvez et mettez-le sur le banc de votre adversaire. Ensuite, changez-le avec le Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Wenn die Bank Ihres Gegners nicht voll ist, schauen Sie sich seine Hand an. Wählen Sie 1 Basic -Pokemon, das Sie dort finden, und legen Sie es auf die Bank Ihres Gegners. Schalten Sie es dann mit dem verteidigenden Pokemon. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Si el banco de tu oponente no está lleno, mira su mano. Elija 1 Pokémon básico que encuentre allí y póngalo en el banco de su oponente. Luego, cambie con el Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Se la panchina del tuo avversario non è piena, guarda la sua mano. Scegli 1 Pokemon di base che trovi lì e mettilo sulla panchina del tuo avversario. Quindi, cambialo con il Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Se o banco do seu oponente não estiver cheio, olhe para a mão dele ou dela. Escolha 1 Pokémon básico que você encontra lá e coloque -o no banco do seu oponente. Em seguida, mude com o Pokémon defensor. Seu oponente escolhe o pokemon defensor para mudar.",
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
