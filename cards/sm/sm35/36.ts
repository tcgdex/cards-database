import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-36",
	localId: 36,

	// Card informations
	name: {
		en: "Ekans",
		fr: "Abo",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "DemizuPosuka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
