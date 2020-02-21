import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-64",
	localId: 64,

	// Card informations
	name: {
		en: "Popplio",
		fr: "Otaquin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 728,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
