import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [305],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Aron"
	},

	description: {
		'en-us': "It loves iron ore. Groups of them fight for territory\nby bashing one another with their steel bodies.",
		'fr-fr': "Il raffole du minerai de fer. Il défend son territoire en chargeant avec son corps d'acier."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger"
		},

		damage: 60,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card