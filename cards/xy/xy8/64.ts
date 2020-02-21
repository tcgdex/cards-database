import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-64",
	localId: 64,

	// Card informations
	name: {
		en: "M Mewtwo-EX",
		fr: "Méga-Mewtwo-EEX",
	},

	hp: 210,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/64/high",
		},
	},

	evolveFrom: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
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
			Type.COLORLESS
		],
		name: {
			en: "Psychic Infinity",
			fr: "Infinité Psy",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to both Active Pokémon. This attack's damage isn't affected by Weakness.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
