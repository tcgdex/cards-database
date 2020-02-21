import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/25/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Roll Call",
			fr: "Liste d’Appel",
		},
		text: {
			en: "Search your deck for a Poliwag, a Poliwhirl, and a Poliwrath, and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez un Ptitard, un Têtarte et un Tartard dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Jump",
			fr: "Hyper Saut",
		},
		text: {
			en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
