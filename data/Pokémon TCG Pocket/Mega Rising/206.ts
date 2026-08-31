import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Furfrou",
		fr: "Couafarel"
	},

	illustrator: "Teeziro",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [676],
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "Left alone, its fur will grow longer and longer,\nbut it will only allow someone it trusts to cut it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fur Coat",
			fr: "Toison Épaisse"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	attacks: [{
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card