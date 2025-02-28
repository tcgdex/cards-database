import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Whiscash"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Barboach"
	},

	description: {
		en: "It is extremely protective of its territory. If any<br />foe approaches, it attacks using vicious tremors."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Thrash"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage. If tails, this Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card