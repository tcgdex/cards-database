import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Flaaffy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Attract Current",
				'fr-fr': "Courant électrique"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie  et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electromagnetic Kick",
				'fr-fr': "Coup électromagnétique"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Lainergie s'inflige 10 dégâts."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. It fire hair that zaps on impact."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85480,
				cardmarket: 278039
			},
		},
	],

}

export default card
