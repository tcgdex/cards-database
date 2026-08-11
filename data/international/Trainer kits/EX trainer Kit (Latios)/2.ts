import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 80,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			'en-us': "Gather Energy",
			'fr-fr': "Rassemblement d'énergie"
		},
		effect: {
			'en-us': "Flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck."
		},
		damage: 20
	}, {
		cost: [
			"Lightning",
			"Lightning",
			"Colorless"
		],
		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Griffe de dragon"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275760,
				tcgplayer: 86664
			}
		},
	],

}

export default card
