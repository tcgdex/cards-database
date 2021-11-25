import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Houndoom EX",
		fr: "Méga Démolosse EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 210,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Houndoom-EX",
		fr: "Démolosse-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Inferno Fang",
				fr: "Croc Infernal",
			},
			effect: {
				en: "You may discard all Fire Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Fire attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "EX"
}

export default card
