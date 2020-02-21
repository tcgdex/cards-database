import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-37",
	localId: 37,

	// Card informations
	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 787,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Punch",
			fr: "Poing Lourd",
		},
		text: {
			en: "This attack does 20 damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
			fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
