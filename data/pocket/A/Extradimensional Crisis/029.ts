import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [308],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Meditite"
	},

	description: {
		'en-us': "Through yoga training, it gained the psychic\npower to predict its foe's next move.",
		'fr-fr': "Ses pouvoirs psychiques, renforcés par la pratique du yoga, lui permettent de prédire les mouvements de ses adversaires."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "High Jump Kick",
			'fr-fr': "Pied Voltige"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card