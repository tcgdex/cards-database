import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lixy",
		en: "Shinx"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Sous Pression",
			en: "Under Pressure"
		},

		effect: {
			fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
			en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage."
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