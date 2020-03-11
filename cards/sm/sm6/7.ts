import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-7",
	localId: 7,

	// Card informations
	name: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 665,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/7/high",
		},
	},

	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "String Shot",
			fr: "Sécrétion",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
