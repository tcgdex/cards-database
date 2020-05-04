import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-26",
	localId: 26,

	// Card informations
	name: {
		en: "Emboar",
		fr: "Roitiflam",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 500,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/26/high",
		},
	},

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blast",
			fr: "Déflagration",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
