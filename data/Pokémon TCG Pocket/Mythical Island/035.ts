import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Beheeyem"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Elgyem"
	},

	description: {
		en: "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mind Jack"
		},

		damage: "10+",
		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
