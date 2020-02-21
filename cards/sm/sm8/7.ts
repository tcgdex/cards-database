import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-7",
	localId: 7,

	// Card informations
	name: {
		en: "Bayleef",
		fr: "Macronium",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 153,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/7/high",
		},
	},

	evolveFrom: {
		en: "Chikorita",
		fr: "Germignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Soothing Scent",
			fr: "Senteur Apaisante",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
