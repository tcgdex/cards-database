import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H24",
	localId: "H24",

	// Card informations
	name: {
		en: "Sudowoodo",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Copy",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Energy Draw",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
