import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidoran♂"
	},

	description: {
		en: "With a horn that's harder than diamond, this\nPokémon goes around shattering boulders as it\nsearches for a moon stone."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Horn Attack"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card