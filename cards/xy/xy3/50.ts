import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-50",
	localId: 50,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/50/high",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
			fr: "Stratopercut",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
