import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-106",
	localId: 106,

	// Card informations
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/106/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/106/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turbo Storm",
			fr: "Tempête Turbo",
		},
		text: {
			en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
