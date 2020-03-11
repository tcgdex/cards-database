import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-53",
	localId: 53,

	// Card informations
	name: {
		en: "Bagon",
		fr: "Bagon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/53/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/53/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/53/high",
		},
	},

	evolveFrom: {
		fr: "Draby",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scary Face",
			fr: "Grimace",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
