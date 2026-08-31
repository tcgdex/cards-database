import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Beautifly",
		fr: "Charmillon"
	},

	illustrator: "Midori Harada",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [267],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys"
	},

	description: {
		en: "It has an aggressive nature. It stabs prey with its\nlong, narrow mouth to drain the prey's fluids.",
		fr: "Il est très agressif. Il pique sa proie avec son long museau étroit et absorbe sa vitalité."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card