import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'de-de': "Sengo"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 70,

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
				'en-us': "Extra Claws",
				'fr-fr': "Griffes supplémentaires",
				'de-de': "Extra Claws"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 90703,
		cardmarket: 276532
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90703,
				cardmarket: 276532
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90703,
				cardmarket: 276532
			},
		}
	],
}

export default card
