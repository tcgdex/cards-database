import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	description: {
		en: "Its wings can carry this Pokémon close to an\naltitude of 4,600 feet. It blows out fire at very\nhigh temperatures."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Inferno Onrush"
		},

		damage: 150,
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card