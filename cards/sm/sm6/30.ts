import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-30",
	localId: 30,

	// Card informations
	name: {
		en: "Avalugg",
		fr: "Séracrawl",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 713,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/30/high",
		},
	},

	evolveFrom: {
		en: "Bergmite",
		fr: "Grelaçon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Ground",
			fr: "Terrain Gelé",
		},
		text: {
			en: "Your opponent can't play any Stadium cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Stade de sa main pendant son prochain tour.",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Skull Bash",
			fr: "Coud’Krâne",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
