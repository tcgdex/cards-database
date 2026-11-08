import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Power Blow",
				'fr-fr': "Coup puissant",
				'de-de': "Power Blow"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Energy attached to Breloom.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Chapignon.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy attached to Breloom"
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. if heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 83956,
		cardmarket: 276533
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83956,
				cardmarket: 276533
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83956,
				cardmarket: 276533
			},
		}
	],
}

export default card
