import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-41",
	localId: 41,

	// Card informations
	name: {
		en: "Samurott",
		fr: "Clamiral",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 503,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/41/high",
		},
	},

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Whirlpool",
			fr: "Siphon Destructeur",
		},
		text: {
			en: "Discard an Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
