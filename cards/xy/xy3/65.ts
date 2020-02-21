import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-65",
	localId: 65,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drascore",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/65/high",
		},
	},

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
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
			Type.DARKNESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
