import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],

			name: {
				en: "High Volt",
				fr: "Voltage puissant"
			},

			effect: {
				en: "If Raichu evolved from Pikachu during this turn, this attack’s base damage is 100 instead of 60.",
				fr: "Si Raichu évolue d'un Pokémon lors de ce tour, les dégâts de base de cette attaque sont de 100 au lieu de 60."
			},

			damage: 60
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

	retreat: 1,

	description: {
		en: "It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278554,
		tcgplayer: 88514
	}
}

export default card
