import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [632],
	hp: 80,
	types: ["Metal"],

	description: {
		en: "They lay their eggs deep inside their nests.\nWhen attacked by Heatmor, they retaliate\nusing their massive mandibles."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite Together",
			fr: "Morsure Commune"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "If Durant is on your Bench, this attack does 40 more damage.",
			fr: "Si Fermite est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card