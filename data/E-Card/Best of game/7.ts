import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Dark Venusaur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	dexId: [3],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Horrid Pollen"
		},

		damage: 30,

		effect: {
			en: "Flip 2 coins. If 1 is heads, the Defending Pokémon is now Asleep and Poisoned. If both are heads, the Defending Pokémon is now Confused and Poisoned. If both are tails, the Defending Pokémon is now Paralyzed and Poisoned."
		}
	}],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275417,
				tcgplayer: 84666
			},
		},
		{
			type: "normal",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 167077
			},
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
