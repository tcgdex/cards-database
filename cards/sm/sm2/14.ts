import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-14",
	localId: 14,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/14/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/14/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/14/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Passionate Dance",
			fr: "Danse Passionnelle",
		},
		text: {
			en: "Search your deck for up to 3 Basic Fire Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 Pokémon Fire de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Kindle",
			fr: "Enflammer",
		},
		text: {
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
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

