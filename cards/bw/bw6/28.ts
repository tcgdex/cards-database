import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/28/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/28/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/28/high.png",
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
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Clear Search",
			fr: "Recherche Libre",
		},
		text: {
			en: "Search your deck for any 3 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

