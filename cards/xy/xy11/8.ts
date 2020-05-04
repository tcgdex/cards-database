import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-8",
	localId: 8,

	// Card informations
	name: {
		en: "Yanmega BREAK",
		fr: "Yanmega TURBO",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/8/high",
		},
	},

	evolveFrom: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Barrier Break",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Brise Barrière",
		},
		text: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
