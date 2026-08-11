import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [33],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Nidoran♂"
	},

	description: {
		'en-us': "With a horn that's harder than diamond, this\nPokémon goes around shattering boulders as it\nsearches for a moon stone.",
		'fr-fr': "Il erre à la recherche d'une Pierre Lune, brisant tous les rochers sur son passage avec sa corne plus solide qu'un diamant."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne"
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