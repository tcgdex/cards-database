import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-35",
	localId: 35,

	// Card informations
	name: {
		en: "Milotic C",
		fr: "Milobellus ",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/35/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/35/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Aqua Tail",
			fr: "Hydroqueue",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to Milotic C. This attack does 10 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Water attachée à Milobellus . Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
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
