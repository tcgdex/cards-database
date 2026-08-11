import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [528],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Woobat"
	},

	description: {
		'en-us': "Emitting powerful sound waves tires it out.\nAfterward, it won't be able to fly for a\nlittle while.",
		'fr-fr': "Émettre des ondes sonores ultra-puissantes le fatigue tellement qu'il n'a plus de forces pour voler."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card