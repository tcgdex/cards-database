import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-90",
	localId: 90,

	// Card informations
	name: {
		en: "Aipom",
		fr: "Capumain",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/90/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/90/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fiddle Around",
			fr: "Bidouillage",
		},
		text: {
			en: "Look at the top 3 cards of your opponent's deck and put them back in any order.",
			fr: "Regardez les 3 cartes du dessus du deck de votre adversaire et replacez-les dans l’ordre de votre choix.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Jab",
			fr: "Coup d’Queue",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

