import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-2",
	localId: 2,

	// Card informations
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 2,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/2/high",
		},
	},

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Whip",
			fr: "Fouet Toxique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
