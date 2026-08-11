import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'de-de': "Plaudagei",
		'pt-br': "Chatot",
		'ko-kr': "페라페"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",

	dexId: [441],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
		'fr-fr': "Il reproduit le cri de ses ennemis pour faire\ncroire qu'il est des leurs et éviter d'être attaqué.",
		'es-es': "Imita los sonidos de sus rivales, haciéndoles creer\nque son amigos e impidiendo que le ataquen.",
		'it-it': "Imita la voce dei nemici per far credere che\nè dei loro, evitando così di essere assalito.",
		'de-de': "Es versucht Attacken zu entgehen, indem es den Ruf\ndes Gegners nachahmt und einen Artgenossen mimt.",
		'pt-br': "Imita os gritos dos outros Pokémon para levá-los a acreditar\nque é um deles. Assim, eles não o atacam.",
		'ko-kr': "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mimic",
			'fr-fr': "Copie",
			'es-es': "Mimético",
			'it-it': "Mimica",
			'de-de': "Mimikry",
			'pt-br': "Mímica",
			'ko-kr': "흉내내기"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Shuffle your hand into your deck. Draw a card for each card in your opponent's hand.",
			'fr-fr': "Mélangez votre main avec votre deck. Piochez une carte pour chaque carte dans la main de votre adversaire.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Roba 1 carta por cada carta en la mano de tu rival.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Compre uma carta para cada carta na mão do seu oponente.",
			'ko-kr': "자신의 패를 모두 덱으로 되돌린다. 상대의 패의 장수만큼 자신의 덱을 뽑는다."
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
