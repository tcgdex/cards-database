import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Conversion 1",
				'fr-fr': "Adaptation 1",
				'de-de': "Conversion 1"
			},
			effect: {
				'en-us': "If Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				'fr-fr': "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté incolore.",
				'de-de': "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rayon psy",
				'de-de': "Psybeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. if heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "More and more people play the slots every day, trying to win a Porygon.",
		'fr-fr': "De plus en plus de gens tentent leur chance au jackpot quotidiennement pour essayer de gagner un Porygon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274101,
				tcgplayer: 88304
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274101,
				tcgplayer: 88304
			}
		}
	]
}

export default card
