import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/96/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hiroyuki Yamamoto",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Wave",
			fr: "Vague de Dragon",
		},
		text: {
			en: "Discard a Grass Energy and a Lightning Energy from this Pokémon.",
			fr: "Défaussez une Énergie Grass et une Énergie Lightning de ce Pokémon.",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
			fr: "Longue Queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
