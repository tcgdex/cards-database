import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-144",
	localId: 144,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/144/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Escaping Incisors",
			fr: "Incisives Fugueuses",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
