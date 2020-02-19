import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Smoochum",
		fr: "Lippouti",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 238,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/30/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/30/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: -1,
		type: AbilityType.POKEBODY,
		name: {
			fr: "Joli visage endormi",
		},
		text: {
			fr: "Tant que Lippouti reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Energy Antics",
			fr: "Singénergies",
		},
		text: {
			en: "Move an Energy card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon. Smoochum is now Asleep.",
			fr: "Déplacez une carte Énergie attachée à l’un des Pokémon de votre adversaire sur un autre de ses Pokémon. Lippouti est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

