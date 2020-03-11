import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 549,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/14/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/14/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/14/high",
		},
	},

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bemusing Aroma",
			fr: "Parfum Troublant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned. If tails, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
