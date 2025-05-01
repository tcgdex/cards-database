import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Raichu ex"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
