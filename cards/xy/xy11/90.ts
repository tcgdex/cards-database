import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy11/90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
