import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		en: "Rocket's Zapdos",
		fr: "Lunala"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma",
			fr: "Douleur Lunaire"
		},

		effect: {
			en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos.",
			fr: "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Electroburn",
			fr: "Attaque Psy"
		},

		effect: {
			en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it.",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576777
	}
}

export default card
