import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Exeggcute"
	},

	description: {
		en: "Blazing sunlight has brought out the true form and powers of this Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tropical Hammer"
		},

		damage: 150,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card