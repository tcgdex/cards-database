import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Escape",
				fr: "Évasion",
			},
			effect: {
				en: "Once during your turn (before your attack), you may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
