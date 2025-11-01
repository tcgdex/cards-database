import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx"
	},

	description: {
		en: "Strong electricity courses through the tips of\nits sharp claws. A light scratch causes fainting\nin foes.",
		fr: "Le courant qui circule à la pointe de ses griffes est capable de faire perdre connaissance à ses proies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card