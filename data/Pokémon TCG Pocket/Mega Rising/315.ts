import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dodrio",
		fr: "Dodrio"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [85],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo"
	},

	description: {
		en: "An enemy that takes its eyes off any of the\nthree heads—even for a second—will get\npecked severely.",
		fr: "Un ennemi ne faisant pas attention à l'une\\ndes trois têtes pendant une seconde se fait picorer."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["mega-blaziken"]
}

export default card