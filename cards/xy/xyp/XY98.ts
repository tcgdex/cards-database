import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY98",
	localId: "XY98",

	// Card informations
	name: {
		en: "M Aerodactyl-EX",
		fr: "M-Ptéra-eEX",
	},

	hp: 210,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY98/high.png",
		},
	},

	evolveFrom: {
		en: "Aerodactyl-EX",
		fr: "Ptéra-eEX",
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
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Drill Dive",
			fr: "Plongée Perce-Roc",
		},
		text: {
			en: "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

