import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-47",
	localId: 47,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/47/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/47/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/47/high",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Remove all Special Conditions and 4 damage counters from Wailord. Wailord is now Asleep.",
			fr: "Retirez à Wailord tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Wailord est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Wave",
			fr: "Vague géante",
		},
		text: {
			en: "Wailord can't use Giant Wave during your next turn.",
			fr: "Wailord ne peut pas utiliser Vague géante lors de votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
