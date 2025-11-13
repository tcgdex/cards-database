import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino",
		fr: "Nidorino"
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
		en: "With a horn that's harder than diamond, this\nPokémon goes around shattering boulders as it\nsearches for a moon stone.",
		fr: "Il erre à la recherche d'une Pierre Lune, brisant tous les rochers sur son passage avec sa corne plus solide qu'un diamant."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Horn Attack",
			fr: "Koud'Korne"
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card