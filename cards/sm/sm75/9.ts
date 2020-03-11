import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-9",
	localId: 9,

	// Card informations
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 555,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/9/high",
		},
	},

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Heat Assist",
			fr: "Assistance Fervente",
		},
		text: {
			en: "Attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Darmani-Hands",
			fr: "Daru-Mains",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 more damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
