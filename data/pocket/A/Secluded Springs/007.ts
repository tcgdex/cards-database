import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [632],
	hp: 70,
	types: ["Grass"],

	description: {
		'en-us': "They attack in groups, covering themselves in steel\narmor to protect themselves from Heatmor.",
		'fr-fr': "Ils portent une armure de fer et se regroupent pour contrer les attaques de leurs prédateurs, les Aflamanoir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mountain Munch",
			'fr-fr': "Dévore-Montagne"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la première carte du dessus du deck de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card