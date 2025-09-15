import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie",
		fr: "Grenousse"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It secretes flexible bubbles from its chest and back.\nThe bubbles reduce the damage it would otherwise\ntake when attacked.",
		fr: "Sa poitrine et son dos sécrètent une mousse qui lui permet de subir moins de dégâts en amortissant le choc des attaques."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop",
			fr: "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card