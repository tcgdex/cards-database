import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 575,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/40/high",
		},
	},

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fortunate Eye",
			fr: "Regard Chanceux",
		},
		text: {
			en: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
