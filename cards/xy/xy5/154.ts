import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-154",
	localId: 154,

	// Card informations
	name: {
		en: "M Aggron-EX",
		fr: "M-Galeking-EX",
	},

	hp: 240,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/154/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/154/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/154/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/154/high.png",
		},
	},

	evolveFrom: {
		en: "Aggron-EX",
		fr: "Galeking-EX",
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
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Slam",
			fr: "Écrasement Mégatonne",
		},
		text: {
			en: "You may flip a coin. If heads, this attack does 120 more damage. If tails, this attack does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 120 dégâts supplémentaires. Si c'est pile, cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

