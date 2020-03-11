import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},

	hp: 160,

	type: [
		Type.FIRE,
	],

	dexId: 727,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/26/high",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Darkest Lariat",
			fr: "Dark Lariat",
		},
		text: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
