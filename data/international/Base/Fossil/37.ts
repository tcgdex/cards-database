import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'de-de': "Georok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
				'de-de': "Härtner"
			},
			effect: {
				'en-us': "During your opponent's next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, à chaque fois que 30 dégâts ou moins sont infligés à Gravalanch (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Immer wenn Georok während des nächsten gegnerischen Zuges 30 oder weniger Schadenspunkte zugefühgt werden (nachdem Schwäche und Resistenz abgerechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-pierres",
				'de-de': "Steinwurf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
		'fr-fr': "Pour se déplacer il dégringole le long des pentes. Il pulvérise tout obstacle sur son passage."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273898,
				tcgplayer: 44439
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273898,
				tcgplayer: 44439
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
