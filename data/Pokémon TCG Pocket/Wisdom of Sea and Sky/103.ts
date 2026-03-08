import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [246],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "Born deep underground, this Pokémon\nbecomes a pupa after eating enough\ndirt to make a mountain.",
		fr: "Il naît dans les profondeurs terrestres. Après avoir englouti une quantité de terre équivalente à une montagne, il se transforme en chrysalide."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card