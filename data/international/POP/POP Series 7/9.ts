import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Stantler"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [234],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Lead",
				'fr-fr': "Avance"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frighten Horn",
				'fr-fr': "Corne qui fait peur"
			},
			effect: {
				'en-us': "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il est maintenant Confus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	description: {
		'en-us': "Staring at its antlers creates an odd sensation as if one were being drawn into their centers."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89505,
				cardmarket: 278041
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 86467,
				cardmarket: 278041
			},
		},
	],

}

export default card
