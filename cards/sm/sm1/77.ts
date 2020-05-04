import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Alolan Raticate",
		fr: "Rattatac d’Alola",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/77/high",
		},
	},

	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Evil Orders",
			fr: "Consignes Maléfiques",
		},
		text: {
			en: "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez autant de cartes dans votre deck que le nombre de Pokémon sur votre Banc, puis placez-les dans votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Endeavor",
			fr: "Effort",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
