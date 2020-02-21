import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-82",
	localId: 82,

	// Card informations
	name: {
		en: "Xerneas BREAK",
		fr: "Xerneas TURBO",
	},

	hp: 150,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/82/high",
		},
	},

	evolveFrom: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Life Stream",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			fr: "Flux Vital",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
		},
		damage: "20×"
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
