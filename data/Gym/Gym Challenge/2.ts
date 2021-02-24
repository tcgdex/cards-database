import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Charizard",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Roaring Flames",
			},
			effect: {
				en: "Discard all Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Energy discarded in this way. ERRATA: Discard all Energy cards attached to Blaine's Charizard except 1.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Jet",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
