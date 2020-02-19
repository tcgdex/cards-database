import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-30",
	localId: 30,

	// Card informations
	name: {
		en: "M Blastoise-EX",
		fr: "M-Tortank-EX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/30/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/30/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/30/high.png",
		},
	},

	evolveFrom: {
		en: "Blastoise-EX",
		fr: "Tortank-EX",
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
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Bombard",
			fr: "Hydroflagration",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

