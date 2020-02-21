import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP32",
	localId: "DP32",

	// Card informations
	name: {
		en: "Magnezone",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP32/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Mirror Shot",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnet Slash",
		},
		text: {
			en: "Discard all Lightning Energy attached to Magnezone.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
