import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-69",
	localId: 69,

	// Card informations
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 748,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/69/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/69/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/69/high.png",
		},
	},

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Venom Fever",
			fr: "Fièvre Envenimée",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 damage for each damage counter on that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

