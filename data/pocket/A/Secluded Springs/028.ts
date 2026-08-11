import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross",
		fr: "Ohmassacre"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [604],
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eelektrik"
	},

	description: {
		en: "They crawl out of the ocean using their arms.\nThey will attack prey on shore and immediately\ndrag it into the ocean.",
		fr: "Il peut sortir de l'eau à la force de ses bras pour attaquer des proies sur la rive et les entraîner avec lui dans l'eau en un instant."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wild Charge",
			fr: "Éclair Fou"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card