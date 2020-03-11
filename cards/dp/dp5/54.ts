import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-54",
	localId: 54,

	// Card informations
	name: {
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/54/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/54/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Burmy Sandy Cloak during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cheniti Cape Sable lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
