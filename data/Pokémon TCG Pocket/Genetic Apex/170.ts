import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Nidoran♂"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "With a horn that's harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
	}
}

export default card
