import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [307],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It never skips its daily yoga training. It heightens\nits inner strength through meditation.",
		'fr-fr': "Méditikka ne rate jamais une séance de yoga. Il augmente sa force intérieure par la méditation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied"
		},

		damage: 10,
		cost: ["Fighting"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card