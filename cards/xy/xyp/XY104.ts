import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY104",
	localId: "XY104",

	// Card informations
	name: {
		en: "M Mawile-EX",
		fr: "M-Mysdibule-EX",
	},

	hp: 190,

	type: [
		Type.FAIRY,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY104/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY104/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY104/high.png",
		},
	},

	evolveFrom: {
		en: "Mawile-EX",
		fr: "Mysdibule-EX",
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
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Twin Grapple",
			fr: "Lutte Duo",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 130
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

