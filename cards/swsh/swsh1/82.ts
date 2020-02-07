import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Galarian Rapidash",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/82/high.png",
		},
	},

	evolveFrom: {
		en: "Galarian Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Pastel Veil",
		},
		text: {
			en: "Your Pokémon recover from all Special Conditions and can't be affected by any Special Conditions.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
		},
		damage: "30+"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

