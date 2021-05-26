import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lixy"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Sous Pression"
		},

		effect: {
			fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 50 dégâts supplémentaires."
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card