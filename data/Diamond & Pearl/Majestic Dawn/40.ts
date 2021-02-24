import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-éclair",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Volt Crush",
				fr: "Écras'volt",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to Manectric and this attack does 40 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à Elecsprint et cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 40,

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
