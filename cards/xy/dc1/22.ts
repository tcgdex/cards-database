import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Team Magma's Zangoose",
		fr: "Mangriff de la Team Magma",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/22/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/22/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/22/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
		},
		text: {
			en: "Search your deck for up to 2 Basic Team Magma Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Pokémon de base de la Team Magma dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Team Play",
			fr: "Jeu d'Équipe",
		},
		text: {
			en: "This attack does 20 damage times the number of Team Magma Pokémon on your Bench.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de la Team Magma sur votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

