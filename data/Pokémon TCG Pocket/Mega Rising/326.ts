import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga ex",
		fr: "Dialga-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [483],
	hp: 150,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Metallic Turbo",
			fr: "Turbo Métallique"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
			fr: "Prenez 2 Énergies {M} de votre zone Énergie et attachez-les à l'un de vos Pokémon de Banc."
		}
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card