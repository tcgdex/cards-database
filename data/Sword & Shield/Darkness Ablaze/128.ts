import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Stunfisk V",
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 200,
	types: [
		"Metal",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Skin",
			},
			effect: {
				en: "This Pokémon gets +20 HP for each Metal Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trapping Bite",
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
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
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,



}

export default card
