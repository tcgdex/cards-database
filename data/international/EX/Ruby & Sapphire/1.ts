import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'de-de': "Stolloss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 110,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Représailles",
				'de-de': "Retaliate"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts pour chaque marqueur de dégât sur Galeking.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage times the numer of damage counters on Aggron"
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Punch",
				'fr-fr': "Ultimapoing",
				'de-de': "Mega Punch"
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Lariat",
				'fr-fr': "Double lasso",
				'de-de': "Double Lariat"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 70 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de face.",
				'de-de': "Flip 2 coins. This attack does 70 damage times the numer of heads."
			},
			damage: "70×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 4,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275649,
				tcgplayer: 83475
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275649,
				tcgplayer: 83475
			}
		},
	],

}

export default card
