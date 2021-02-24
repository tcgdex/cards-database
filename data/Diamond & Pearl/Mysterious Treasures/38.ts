import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ursaring",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bad Temper",
			},
			effect: {
				en: "The Defending Pokémon is now Confused. During your opponent's next turn, that Pokémon's attacks do 60 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Defensive Claw",
			},
			effect: {
				en: "If Teddiursa is on your Bench, this attack does 60 damage plus 20 more damage. If Teddiursa on your Bench has any damage counters on it, this attack does 60 damage plus 40 more damage and remove all damage counters from that Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],





}

export default card
