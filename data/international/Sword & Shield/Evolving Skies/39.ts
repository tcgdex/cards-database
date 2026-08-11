import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			'en-us': "Synchrodraw",
			'fr-fr': "Pioche Synchro",
			'es-es': "Sincrorrobo",
			'it-it': "Sincropesca",
			'pt-br': "Synchrodraw",
			'de-de': "Synchronzug"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
			'pt-br': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Water Gun",
			'de-de': "Aquaknarre"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola's branches."
	},

	dexId: [370],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574063,
				tcgplayer: 246854
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574063,
				tcgplayer: 246854
			}
		},
	],
}

export default card
