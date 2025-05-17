import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		de: "Plaudagei",
		'pt-br': "Chatot",
		ko: "페라페"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
		fr: "Il reproduit le cri de ses ennemis pour faire\ncroire qu'il est des leurs et éviter d'être attaqué.",
		es: "Imita los sonidos de sus rivales, haciéndoles creer\nque son amigos e impidiendo que le ataquen.",
		it: "Imita la voce dei nemici per far credere che\nè dei loro, evitando così di essere assalito.",
		de: "Es versucht Attacken zu entgehen, indem es den Ruf\ndes Gegners nachahmt und einen Artgenossen mimt.",
		'pt-br': "Imita os gritos dos outros Pokémon para levá-los a acreditar\nque é um deles. Assim, eles não o atacam.",
		ko: "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mimic",
			fr: "Copie",
			es: "Mimético",
			it: "Mimica",
			de: "Mimikry",
			'pt-br': "Mímica",
			ko: "흉내내기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Shuffle your hand into your deck. Draw a card for each card in your opponent's hand.",
			fr: "Mélangez votre main avec votre deck. Piochez une carte pour chaque carte dans la main de votre adversaire.",
			es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Roba 1 carta por cada carta en la mano de tu rival.",
			it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Compre uma carta para cada carta na mão do seu oponente.",
			ko: "자신의 패를 모두 덱으로 되돌린다. 상대의 패의 장수만큼 자신의 덱을 뽑는다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
