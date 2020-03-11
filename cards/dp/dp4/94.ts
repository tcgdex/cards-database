import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 293,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/94/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/94/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Takao Unno",



	attacks: [{
		name: {
			en: "Mumble",
			fr: "Marmonner",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Uproar",
			fr: "Brouhaha",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
