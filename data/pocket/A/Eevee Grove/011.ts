import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [725],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "If you try too hard to get close to it, it won't\nopen up to you. Even if you do grow close,\ngiving it too much affection is still a no-no.",
		'fr-fr': "Il se renferme sur lui-même si on lui accorde trop d'attention. Mieux vaut éviter de beaucoup le caresser, même s'il devient affectueux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement"
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card