import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-38",
	localId: 38,

	// Card informations
	name: {
		en: "Froslass",
		fr: "Momartik",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 478,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/38/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Spiteful Sigh",
			fr: "Souffle Rancunier",
		},
		text: {
			en: "Put up to 7 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			fr: "Placez jusqu’à 7 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
