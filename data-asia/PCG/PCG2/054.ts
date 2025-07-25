import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Claydol",
         ja: "クレイドル",
         fr: "Argile",
         de: "Claydol",
         es: "Arcilla",
         it: "Claydol",
         pt: "Claydol",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [344],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Psychic Trace",
            ja: "サイキックトレース",
            fr: "Trace psychique",
            de: "Psychische Spur",
            es: "Rastro psíquico",
            it: "Traccia psichica",
            pt: "Traço psíquico",
          },
          effect: {
            en: "Once during your turn (before your attack), if Claydol is your Active PokÃ©mon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、クレイドールがあなたのアクティブなポカモンである場合、あなたはあなたの手をあなたのデッキにシャッフルするかもしれません。次に、相手の手にあるカードの数に等しい数枚のカードを描きます。クレイドールが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Claydol est votre poké actif, vous pouvez mélanger votre main dans votre deck. Ensuite, dessinez un certain nombre de cartes égales au nombre de cartes dans la main de votre adversaire. Cette puissance ne peut pas être utilisée si Claydol est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Claydol Ihr aktiver Poké Mon Mon ist, können Sie Ihre Hand in Ihr Deck mischen. Zeichnen Sie dann eine Anzahl von Karten, die der Anzahl der Karten in der Hand Ihres Gegners entsprechen. Diese Leistung kann nicht angewendet werden, wenn Claydol durch einen besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Claydol es su Poké Mon activo, puede barajar su mano en su mazo. Luego, dibuje una serie de cartas igual al número de cartas en la mano de tu oponente. Esta potencia no se puede usar si Claydol se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Claydol è il tuo poké attivo, puoi mescolare la mano nel mazzo. Quindi, disegna una serie di carte pari al numero di carte nella mano del tuo avversario. Questa potenza non può essere utilizzata se Claydol è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Claydol for o seu Poké ativo, você poderá embaralhar sua mão no baralho. Em seguida, desenhe uma série de cartas iguais ao número de cartas na mão do seu oponente. Esse poder não pode ser usado se o Claydol for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ancient Mantra",
            ja: "古代のマントラ",
            fr: "Mantra ancien",
            de: "Altes Mantra",
            es: "Mantra antiguo",
            it: "Antico mantra",
            pt: "Mantra antigo",
          },
          effect: {
            en: "If Claydol has any Psychic Energy attached to it, the Defending Pokemon is now Confused. If Claydol has any Fighting Energy attached to it, this attack does 20 damage plus 20 more damage.",
            ja: "Claydolに精神的なエネルギーが付着している場合、防御ポケモンは混乱しています。 Claydolには、戦闘エネルギーが付属している場合、この攻撃は20ダメージに20回のダメージを与えます。",
            fr: "Si Claydol a une énergie psychique qui lui est attachée, le Pokémon en défense est maintenant confus. Si Claydol a une énergie de combat qui lui est attachée, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn Claydol eine psychische Energie hat, ist das verteidigende Pokémon jetzt verwirrt. Wenn Claydol eine Kampfenergie mit sich bringt, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Si Claydol tiene alguna energía psíquica adjunta, el Pokémon defensor ahora está confundido. Si Claydol tiene alguna energía de lucha adjunta, este ataque hace 20 daños más 20 más de daño.",
            it: "Se Claydol ha un'energia psichica ad esso collegata, il Pokemon in difesa è ora confuso. Se Claydol ha un'energia di combattimento ad esso attaccata, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se Claydol tiver alguma energia psíquica ligada a ela, o Pokemon atual agora está confuso. Se o Claydol tiver alguma energia de combate a ele, esse ataque causará 20 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

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
