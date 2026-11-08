import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [404],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx"
	},

	description: {
		'en-us': "Strong electricity courses through the tips of\nits sharp claws. A light scratch causes fainting\nin foes.",
		'fr-fr': "Le courant qui circule à la pointe de ses griffes est capable de faire perdre connaissance à ses proies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal"
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