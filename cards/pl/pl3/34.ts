import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-34",
	localId: 34,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/34/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/34/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/34/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Channeling",
			fr: "Canaliser",
		},
		text: {
			en: "Your opponent draws 2 cards.",
			fr: "Votre adversaire pioche 2 cartes.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chakra Points",
			fr: "Chakras",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
