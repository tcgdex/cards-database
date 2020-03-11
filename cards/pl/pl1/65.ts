import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 8,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/65/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/65/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/65/high",
		},
	},

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Tackle",
			fr: "Lance roquette",
		},
		text: {
			en: "Wartortle does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Wartortle by attacks during your opponent's next turn.",
			fr: "Carabaffe s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carabaffe par des attaques lors du prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
