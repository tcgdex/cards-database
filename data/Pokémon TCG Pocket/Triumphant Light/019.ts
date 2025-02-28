import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Froslass"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snorunt"
	},

	description: {
		en: "When it finds humans or Pokémon it likes,<br />it freezes them and takes them to its chilly<br />den, where they become decorations."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blizzard"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card