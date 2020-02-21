import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-93",
	localId: 93,

	// Card informations
	name: {
		en: "Deino",
		fr: "Solochi",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 633,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/93/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/93/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Deep Growl",
			fr: "Rugissement Profond",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Power Breath",
			fr: "Souffle Puissant",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
