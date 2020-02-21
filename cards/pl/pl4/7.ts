import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Probopass",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/7/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1083,
		type: AbilityType.POKEBODY,
		name: {
			en: "Competitiveness",
		},
		text: {
			en: "If you don't have a Supporter card in play, each of Probopass's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Top Chop",
		},
		text: {
			en: "Draw a card.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
