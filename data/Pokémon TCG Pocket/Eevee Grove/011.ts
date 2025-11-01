import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Litten",
		fr: "Flamiaou"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "If you try too hard to get close to it, it won't\nopen up to you. Even if you do grow close,\ngiving it too much affection is still a no-no.",
		fr: "Il se renferme sur lui-même si on lui accorde trop d'attention. Mieux vaut éviter de beaucoup le caresser, même s'il devient affectueux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement"
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