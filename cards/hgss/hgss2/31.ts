import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Grotle",
		fr: "Boskara",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 388,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/31/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/31/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/31/high",
		},
	},

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'herbe",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Powder",
			fr: "Poudre dodo",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
