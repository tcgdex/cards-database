import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon",
		fr: "Pyroli"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon.",
			fr: "Défaussez une Énergie R de ce Pokémon."
		},

		damage: "110"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.",
		fr: "Sa glande enflammée chauffe l'air qu'il inspire. Il l'exhale ensuite sous forme de flamme atteignant les 1 700 °C."
	}
}

export default card
