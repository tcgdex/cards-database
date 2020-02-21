import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-29",
	localId: 29,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/29/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aurora Wave",
			fr: "Vague Boréale",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Split",
			fr: "Scission Aqua",
		},
		text: {
			en: "This attack does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
