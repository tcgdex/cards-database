import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Furret",
		fr: "Fouinar",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 162,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/82/high",
		},
	},

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Buried Treasure Hunt",
			fr: "Trésor Enfoui",
		},
		text: {
			en: "Look at the top 4 cards of your deck and put 2 of them into your hand. Discard the other cards.",
			fr: "Regardez les 4 cartes du dessus de votre deck et ajoutez 2 d'entre elles à votre main. Défaussez les autres cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
