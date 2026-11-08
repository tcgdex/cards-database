import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Magnetic Lift",
			'fr-fr': "Ascension Magnétique",
			'es-es': "Impulso Magnético",
			'it-it': "Sollevamento Magnetico",
			'pt-br': "Elevação Magnética",
			'de-de': "Magnetischer Auftrieb"
		},

		effect: {
			'en-us': "Search your deck for a card. Shuffle your deck, then put that card on top of it.",
			'fr-fr': "Cherchez dans votre deck une carte. Mélangez votre deck, puis placez cette carte-là sur le dessus de votre deck.",
			'es-es': "Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta. Rimischia le carte del tuo mazzo, poi metti quella carta in cima al mazzo.",
			'pt-br': "Procure por 1 carta no seu baralho. Embaralhe o seu baralho e, em seguida, coloque aquela carta como a carta de cima do seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte. Mische dein Deck und lege jene Karte anschließend darauf."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "From its rear, Beldum emits a magnetic force that rapidly pulls opponents in. They get skewered on Beldum's sharp claws.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682164,
				tcgplayer: 451771
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682164,
				tcgplayer: 451771
			}
		},
	],
}

export default card
