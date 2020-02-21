import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-102",
	localId: 102,

	// Card informations
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/102/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/102/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Reheat",
			fr: "Réchauffer",
		},
		text: {
			en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
			fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
