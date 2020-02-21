import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-85",
	localId: 85,

	// Card informations
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 785,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/85/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strafe",
			fr: "Bombarder",
		},
		text: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Flashing Bolt",
			fr: "Éclair Aveuglant",
		},
		text: {
			en: "This Pokémon can't use Flashing Bolt during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Éclair Aveuglant pendant votre prochain tour.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
