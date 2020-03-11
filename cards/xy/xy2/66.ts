import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Florges",
		fr: "Florges",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/66/high",
		},
	},

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Brilliant Search",
			fr: "Recherche Brillante",
		},
		text: {
			en: "Search your deck for up to 3 cards and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 3 cartes dans votre deck puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Petal Blizzard",
			fr: "Tempête Florale",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
