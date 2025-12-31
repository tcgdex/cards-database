import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
		fr: "Les blessures provoquées par son souffle enflammé sont permanentes, et la douleur ne disparaît jamais."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Diving Swipe",
			fr: "Rafle Plongeante"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire."
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