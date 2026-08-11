import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [229],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Houndour"
	},

	description: {
		'en-us': "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
		'fr-fr': "Les blessures provoquées par son souffle enflammé sont permanentes, et la douleur ne disparaît jamais."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Diving Swipe",
			'fr-fr': "Rafle Plongeante"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card