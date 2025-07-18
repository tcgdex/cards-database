import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Walrein",
         ja: "ウォーレイン",
         fr: "Walrein",
         de: "Walrein",
         es: "Walrein",
         it: "Walrein",
         pt: "Walrein",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [365],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Crush Draw",
            ja: "ドローを押しつぶします",
            fr: "Écraser",
            de: "Crush Draw",
            es: "Sorteo",
            it: "Disegna di cotta",
            pt: "Draw de esmagamento",
          },
          effect: {
            en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your PokÃ©mon. If not, put the card back on your deck. This power can't be used if Walrein is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキの一番上のカードを明らかにすることができます。そのカードが基本的なエネルギーカードの場合は、Pokã©Monの1つに添付してください。そうでない場合は、カードをデッキに戻します。 Walreinが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez révéler la carte supérieure de votre deck. Si cette carte est une carte d'énergie de base, attachez-la à 1 de votre pokã © Mon. Sinon, remettez la carte sur votre deck. Cette puissance ne peut pas être utilisée si Walrein est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie die obere Karte Ihres Decks angeben. Wenn diese Karte eine grundlegende Energiekarte ist, fügen Sie sie an 1 Ihrer Poké Mon Mon. Wenn nicht, legen Sie die Karte wieder auf Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Walrein von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede revelar la carta superior de su mazo. Si esa tarjeta es una tarjeta de energía básica, adjunte a 1 de su Poké Mon. Si no, vuelva a colocar la carta en tu mazo. Esta potencia no se puede usar si Walrein se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi rivelare la carta superiore del tuo mazzo. Se quella carta è una carta energetica di base, attaccala a 1 del tuo poké mon. In caso contrario, rimetti la carta sul tuo mazzo. Questo potere non può essere utilizzato se Walrein è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode revelar a carta superior do seu baralho. Se esse cartão for um cartão de energia básico, conecte -o a 1 do seu Poké MON. Caso contrário, coloque a carta de volta no seu baralho. Esse poder não pode ser usado se Walrein for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Sheer Cold",
            ja: "寒い",
            fr: "Pur froid",
            de: "Bloß kalt",
            es: "Puro frío",
            it: "Puro freddo",
            pt: "Puro frio",
          },
          effect: {
            en: "Flip a coin. If heads, each Defending Pokemon can't attack during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは、相手の次のターン中に攻撃することはできません。",
            fr: "Retourner une pièce. Si les têtes, chaque Pokémon en défense ne peut pas attaquer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Köpfe, kann jedes verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht angreifen.",
            es: "Voltea una moneda. Si se dirige, cada Pokémon defensor no puede atacar durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se la testa, ogni Pokemon in difesa non può attaccare durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, cada Pokemon defensor não pode atacar durante o próximo turno do seu oponente.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
