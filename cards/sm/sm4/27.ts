import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-27",
	localId: 27,

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
			en: "https://assets.tcgdex.net/en/sm/sm4/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/27/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "TLC",
			fr: "Soins Dévoués",
		},
		text: {
			en: "Shuffle 1 of your opponent's Benched Pokémon that has any damage counters on it and all cards attached to it into their deck.",
			fr: "Mélangez dans le deck de votre adversaire un de ses Pokémon de Banc ayant au moins un marqueur de dégâts et toutes les cartes qui lui sont attachées.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ocean Cyclone",
			fr: "Cyclone Océanique",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
