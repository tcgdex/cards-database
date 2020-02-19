import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Registeel",
		fr: "Registeel",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 379,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/68/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/68/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/68/high.png",
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
			Type.METAL
		],
		name: {
			en: "Turbo Arm",
			fr: "Bras Turbo",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Hand",
			fr: "Main de Fer",
		},
		text: {
			en: "If Regice is on your Bench, heal 30 damage from this Pokémon.",
			fr: "Si Regice est sur votre Banc, soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

