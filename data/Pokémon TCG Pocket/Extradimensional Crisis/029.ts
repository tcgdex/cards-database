import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [308],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Meditite"
	},

	description: {
		en: "Through yoga training, it gained the psychic\npower to predict its foe's next move.",
		fr: "Ses pouvoirs psychiques, renforcés par la pratique du yoga, lui permettent de prédire les mouvements de ses adversaires."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige"
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