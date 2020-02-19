import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY35",
	localId: "XY35",

	// Card informations
	name: {
		en: "M Metagross-EX",
		fr: "M Métalosse-EEX",
	},

	hp: 220,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY35/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY35/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY35/high.png",
		},
	},

	evolveFrom: {
		en: "Metagross-EX",
		fr: "Métalosse-EEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gatling Slug",
			fr: "Frappe Répétée",
		},
		text: {
			en: "This attack does 10 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

