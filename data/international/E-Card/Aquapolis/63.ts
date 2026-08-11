import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Tyrogue",
		'fr-fr': "Débugant",
		'de-de': "Rabauz"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [236],

	hp: 30,

	types: [
		"Fighting"
	],

	stage: "Baby",

	attacks: [
		{
			cost: [
				"Fighting",
			],

			name: {
				'en-us': "Energy Punch",
				'fr-fr': "Poing énergétique",
				'de-de': "Energy Punch"
			},

			effect: {
				'en-us': "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez-vous d'une carte Énergie spéciale attachée au Pokémon Défenseur. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing."
			},

			damage: 10
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90127,
				cardmarket: 275136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90127,
				cardmarket: 275136
			}
		},
	]
}

export default card
