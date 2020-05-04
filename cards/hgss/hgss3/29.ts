import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-29",
	localId: 29,

	// Card informations
	name: {
		en: "Lairon",
		fr: "Galegon",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/29/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/29/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/29/high",
		},
	},

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Scrap Attack",
			fr: "Attaque de ferraille",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a Metal Energy card and attach it to Lairon.",
			fr: "Lancez une pièce. Si c'est face, récupérez une carte Énergie Metal dans votre pile de défausse et attachez-la à Galegon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
