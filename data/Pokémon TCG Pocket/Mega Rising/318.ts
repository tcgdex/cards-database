import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar ex",
		fr: "Félinferno-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [727],
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		}
	}, {
		name: {
			en: "Scar-Charged Smash",
			fr: "Frappe Balafre"
		},

		damage: "80+",
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "If this Pokémon has damage on it, this attack does 60 more damage.",
			fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige 60 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card