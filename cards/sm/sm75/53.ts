import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-53",
	localId: 53,

	// Card informations
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 783,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/53/high",
		},
	},

	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
