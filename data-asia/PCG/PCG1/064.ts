import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeot",
         ja: "pidgeot",
         fr: "Pidgeot",
         de: "Pidgeot",
         es: "Pidgeot",
         it: "Pidgeot",
         pt: "PIDGEOT",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [18],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Quick Search",
            ja: "クイック検索",
            fr: "Recherche rapide",
            de: "Schnelle Suche",
            es: "Búsqueda rápida",
            it: "Ricerca rapida",
            pt: "Pesquisa rápida",
          },
          effect: {
            en: "Once during your turn (before your attack), you may choose any 1 card from your deck and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Quick Search PokÃ©-Power each turn. This power can't be used if Pidgeot is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、デッキから1枚のカードを選択して手に入れることができます。その後、デッキをシャッフルします。ターンごとに1つ以上のクイック検索Pokã©-Powerを使用することはできません。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez choisir n'importe quelle carte dans votre deck et la mettre dans votre main. Mélanger votre deck par la suite. Vous ne pouvez pas utiliser plus d'un tour de recherche rapide à chaque tour. Cette puissance ne peut pas être utilisée si Pidgeot est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug (vor Ihrem Angriff) sind, können Sie eine 1 -Karte von Ihrem Deck aus auswählen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Sie können nicht mehr als 1 Schnellsuche in jeder Runde verwenden. Diese Leistung kann nicht verwendet werden, wenn Pidgeot von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede elegir cualquier 1 carta de su mazo y ponerla en su mano. Baraja tu mazo después. No puede usar más de 1 Poké de búsqueda rápida en cada turno. Esta potencia no se puede usar si Pidgeot se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi scegliere qualsiasi carta 1 dal tuo mazzo e metterlo in mano. Shuffle il tuo mazzo in seguito. Non è possibile utilizzare più di 1 rapida ricerca Poké-power ogni turno. Questa potenza non può essere utilizzata se Pidgeot è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode escolher qualquer 1 cartão do seu baralho e colocá -lo em sua mão. Afaste seu baralho depois. Você não pode usar mais de 1 pesquisa rápida Poké-Power a cada turno. Esse poder não pode ser usado se o PIDGEOT for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Clutch",
            ja: "クラッチ",
            fr: "Embrayage",
            de: "Kupplung",
            es: "Embrague",
            it: "Frizione",
            pt: "Embreagem",
          },
          effect: {
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
