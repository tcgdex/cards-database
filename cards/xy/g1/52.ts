import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 113,
		type: AbilityType.TALENT,
		name: {
			en: "Bench Barrier",
			fr: "Barrière de Banc",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by attacks.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Juggling",
			fr: "Jonglerie",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
