import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Poison",
				fr: "Poison-Croix",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slicing Blade",
				fr: "Lame Tranchante",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
