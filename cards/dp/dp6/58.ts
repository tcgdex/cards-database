import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-58",
	localId: 58,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/58/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/58/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/58/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Lampi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Current",
			fr: "Courant fort",
		},
		text: {
			en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
			fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
