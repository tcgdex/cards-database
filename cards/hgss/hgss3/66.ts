import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/66/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/66/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rambunctious Party",
			fr: "Méga-boum",
		},
		text: {
			en: "Look at the top 5 cards of your deck. Choose as many Basic Pokémon as you like and put them onto your Bench. Shuffle the other cards back into your deck.",
			fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez autant de Pokémon de base que vous le voulez et placez-les sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie éclaboussante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
