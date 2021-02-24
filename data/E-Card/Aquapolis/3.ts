import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ariados",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Gluey Slime",
			},
			effect: {
				en: "As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can't make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spider Force",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
