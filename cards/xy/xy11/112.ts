import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-112",
	localId: 112,

	// Card informations
	name: {
		en: "M Gardevoir-EX",
		fr: "M-Gardevoir-EX",
	},

	hp: 210,

	type: [
		Type.FAIRY,
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/112/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/112/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/112/high",
		},
	},

	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
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
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Despair Ray",
			fr: "Rayon Désespoir",
		},
		text: {
			en: "Discard as many of your Benched Pokémon as you like. This attack does 10 more damage for each Benched Pokémon you discarded in this way.",
			fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
