import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-32",
	localId: 32,

	// Card informations
	name: {
		en: "Raikou",
		fr: "Raikou",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Booming Thunder",
			fr: "Tonnerre Grondant",
		},
		text: {
			en: "Attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
