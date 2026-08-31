import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Crabominable",
		fr: "Crabominable"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [740],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre"
	},

	description: {
		en: "Though its punches are powerful, this Pokémon's\nmovements are sluggish. It blows icy bubbles\nfrom its mouth to immobilize its opponents."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Last-Chance Punch",
			fr: "Coup d'Poing Désespéré"
		},

		damage: 30,
		cost: ["Fighting"],

		effect: {
			en: "If this Pokémon's remaining HP is 30 or less, this attack does 60 more damage.",
			fr: "S'il reste 30 PV ou moins à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card