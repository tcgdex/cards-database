import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-114",
	localId: 114,

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/114/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/114/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/114/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gather Energy",
			fr: "Récolte d'Énergie",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à 1 de vos Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
