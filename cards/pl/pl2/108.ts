import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-108",
	localId: 108,

	// Card informations
	name: {
		en: "Infernape 4",
		fr: "Simiabraz  Niv. X",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/108/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/108/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 486,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Intimidating Roar",
			fr: "Rugissement intimidant",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Infernape is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec 1 des Pokémon de son Banc. Ce pouvoir ne peut pas être utilisé si Simiabraz  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
		},
		text: {
			en: "Discard 2 Energy attached to Infernape .",
			fr: "Défaussez 2 Énergies attachées à Simiabraz .",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
