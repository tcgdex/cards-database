import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult V",
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bite",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Jet Assault",
			},
			effect: {
				en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
