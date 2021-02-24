import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Balloon Barrage",
				fr: "Barrage de Ballons",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
