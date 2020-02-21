import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM75",
	localId: "SM75",

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
			en: "https://assets.tcgdex.net/en/sm/smp/SM75/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM75/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM75/high",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
