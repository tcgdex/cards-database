import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-14",
	localId: 14,

	// Card informations
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
