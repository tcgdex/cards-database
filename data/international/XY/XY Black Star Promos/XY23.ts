import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Whisk Away",
				'fr-fr': "Fouet Renvoi",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Choose a Pokémon you find there and put it on the bottom of your opponent's deck. If you do, this attack does 30 more damage.",
				'fr-fr': "Votre adversaire montre sa main. Choisissez un Pokémon que vous y trouvez et placez-le en dessous du deck de votre adversaire. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30＋",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spirit Dance",
				'fr-fr': "Danse Spirituelle",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A Pokémon that was feared as a forest guardian. It can read the foe's mind and take preemptive action.",
	},

	thirdParty: {
		cardmarket: 281307
	}
}

export default card
