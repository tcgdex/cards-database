import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Tyranitar (Delta Species)",
         ja: "ティラニター（デルタ種）",
         fr: "Tyranitar (espèce delta)",
         de: "Tyranitar (Delta -Arten)",
         es: "Tyranitar (especie delta)",
         it: "Tyranitar (Delta Species)",
         pt: "Tyranitar (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 120,
      types: ["Fire"],
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
            en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your PokÃ©mon. If not, put the card back on top of your deck. This power can't be used if Tyranitar is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキの一番上のカードを明らかにすることができます。そのカードが基本的なエネルギーカードの場合は、Pokã©Monの1つに添付してください。そうでない場合は、カードをデッキの上に戻します。 Tyranitarが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez révéler la carte supérieure de votre deck. Si cette carte est une carte d'énergie de base, attachez-la à 1 de votre pokã © Mon. Sinon, remettez la carte sur votre jeu. Ce pouvoir ne peut pas être utilisé si le tyranitar est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff) können Sie die obere Karte Ihres Decks angeben. Wenn diese Karte eine grundlegende Energiekarte ist, fügen Sie sie an 1 Ihrer Poké Mon Mon. Wenn nicht, legen Sie die Karte wieder auf Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Tyranitar von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede revelar la carta superior de su mazo. Si esa tarjeta es una tarjeta de energía básica, adjunte a 1 de su Poké Mon. Si no, vuelva a colocar la carta en la parte superior de su mazo. Este poder no se puede usar si Tyranitar se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi rivelare la carta superiore del tuo mazzo. Se quella carta è una carta energetica di base, attaccala a 1 del tuo poké mon. In caso contrario, rimetti la carta sopra il mazzo. Questo potere non può essere usato se Tyranitar è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode revelar a carta superior do seu baralho. Se esse cartão for um cartão de energia básico, conecte -o a 1 do seu Poké MON. Caso contrário, coloque a carta de volta em cima do seu baralho. Esse poder não pode ser usado se a Tyranitar for afetada por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Metal", "Colorless"],
          name: {
            en: "Delta Crush",
            ja: "デルタクラッシュ",
            fr: "Delta Crush",
            de: "Delta Crush",
            es: "Delta Crush",
            it: "Delta Crush",
            pt: "Delta Crush",
          },
          effect: {
            en: "You may discard an Energy card attached to Tyranitar. If you do, this attack does 50 damage plus 20 more damage.",
            ja: "Tyranitarに取り付けられたエネルギーカードを捨てることができます。そうした場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Tyranitar. Si vous le faites, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Sie können eine an Tyranitar angeschlossene Energiekarte verwerfen. Wenn Sie dies tun, verursacht dieser Angriff 50 Schäden plus 20 weitere Schäden.",
            es: "Puede descartar una tarjeta de energía unida a Tyranitar. Si lo haces, este ataque hace 50 daños más 20 más de daño.",
            it: "Puoi scartare una carta energetica attaccata a Tyranitar. Se lo fai, questo attacco infligge 50 danni più 20 danni in più.",
            pt: "Você pode descartar um cartão de energia anexado ao Tyranitar. Se o fizer, esse ataque causa 50 danos mais 20 mais danos.",
          },
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
