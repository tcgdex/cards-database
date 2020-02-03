import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-22",
	localId: 22,

	// Card informations
	name: {
		en: "M Houndoom-EX",
		fr: "Méga-Démolosse-EXEX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/22/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/22/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/22/high.png",
		},
	},

	evolveFrom: {
		en: "Houndoom-EX",
		fr: "Démolosse-EEX",
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
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Inferno Fang",
			fr: "Croc Infernal",
		},
		text: {
			en: "You may discard all Fire Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies Fire attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

