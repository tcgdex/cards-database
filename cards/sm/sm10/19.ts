import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-19",
	localId: 19,

	// Card informations
	name: {
		en: "Kartana",
		fr: "Katagami",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 798,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/19/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Big Cut",
			fr: "Grosse Coupure",
		},
		text: {
			en: "If you have exactly 4 Prize cards remaining, this attack does 120 more damage.",
			fr: "S’il vous reste exactement 4 cartes Récompense, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "False Swipe",
			fr: "Faux-Chage",
		},
		text: {
			en: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			fr: "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
