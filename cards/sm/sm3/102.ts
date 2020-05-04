import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-102",
	localId: 102,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/102/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Screech",
			fr: "Grincement",
		},
		text: {
			en: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
