import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-30",
	localId: 30,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/30/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/30/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/30/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deep Sea Swirl",
			fr: "Remous Abyssal",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 7 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Balance Bind",
			fr: "Étreinte Équilibre",
		},
		text: {
			en: "If you and your opponent have the same number of Benched Pokémon, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si votre adversaire et vous avez le même nombre de Pokémon de Banc, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

