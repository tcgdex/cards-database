import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Yamper",
		fr: "Voltoutou"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity.",
		fr: "Ce glouton assiste les humains dans leur travail en échange de friandises. Il court sans arrêt, le corps enveloppé d'électricité."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card