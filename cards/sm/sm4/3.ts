import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-3",
	localId: 3,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/3/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/3/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/3/high.png",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sudden Sting",
			fr: "Piqûre Inattendue",
		},
		text: {
			en: "If this Pokémon evolved from Kakuna during this turn, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Si ce Pokémon a évolué de Coconfort pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sharp Sting",
			fr: "Piqûre Pointue",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

