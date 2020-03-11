import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-63",
	localId: 63,

	// Card informations
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/63/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/63/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Continuous Eggsplosion",
			fr: "Éclate continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
			fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
