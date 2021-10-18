import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu Libre",
		fr: "Pikachu Catcheur",
		es: "Pikachu Enmascarada",
		it: "Pikachu wrestler",
		pt: "Pikachu Mascarada",
		de: "Wrestler-Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Yoshinobu Saito",

	description: {
		en: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
	},

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}, {
		name: {
			en: "Flying Elekick"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}]
}

export default card