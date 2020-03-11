import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-4",
	localId: 4,

	// Card informations
	name: {
		en: "Mothim",
		fr: "Papilord",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 414,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/4/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",

	abilities: [{
		id: 401,
		type: AbilityType.TALENT,
		name: {
			en: "Wormadam First",
			fr: "Cheniselle d'Abord",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Wormadam to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l'un de vos Cheniselle vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
