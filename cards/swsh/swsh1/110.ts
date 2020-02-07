import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Sandaconda",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/110/high.png",
		},
	},

	evolveFrom: {
		en: "Silicobra",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Sand Sac",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Power Press",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Fighting Energy attached (in addition to this attack's cost), this attack does 70 more damage.",
		},
		damage: "60+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

