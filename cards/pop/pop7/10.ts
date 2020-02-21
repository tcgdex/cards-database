import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Wormadam Sandy Cloak",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/10/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 866,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sandy Cloak",
		},
		text: {
			en: "Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Over",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
