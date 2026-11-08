import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Overhaul",
			'fr-fr': "Refonte",
			'es-es': "Reparación",
			'it-it': "Revisione",
			'pt-br': "Reconstrução",
			'de-de': "Überholung"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Mach Bolt",
			'fr-fr': "Éclair Fulgurant",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "One boy's invention led to the development of many different machines that take advantage of Rotom's unique capabilities.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682100,
				tcgplayer: 451709
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682100,
				tcgplayer: 451709
			}
		},
	],
}

export default card
