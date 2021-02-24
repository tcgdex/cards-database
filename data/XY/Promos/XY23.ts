import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
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
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Whisk Away",
				fr: "Fouet Renvoi",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose a Pokémon you find there and put it on the bottom of your opponent's deck. If you do, this attack does 30 more damage.",
				fr: "Votre adversaire montre sa main. Choisissez un Pokémon que vous y trouvez et placez-le en dessous du deck de votre adversaire. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spirit Dance",
				fr: "Danse Spirituelle",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
