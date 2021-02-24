import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Fang",
				fr: "Crocs Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
				fr: "Frap'éclair",
			},
			effect: {
				en: "You may discard 2 Energy attached to Jolteon. If you do, this attack's base damage is 90 instead of 50.",
				fr: "Vous pouvez défausser 2 Énergies attachées à Voltali. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
