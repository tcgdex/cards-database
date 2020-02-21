import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY94",
	localId: "XY94",

	// Card informations
	name: {
		en: "Trevenant",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY94/high",
		},
	},

	evolveFrom: {
		en: "Phantump",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 36,
		type: AbilityType.TALENT,
		name: {
			en: "Nervous Seed",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
		}
	}],



	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
