import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-77",
	localId: 77,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toss and Turn",
			fr: "Retournement",
		},
		text: {
			en: "This attack can be used even if this Pokémon is Asleep. If it is, this attack does 90 more damage.",
			fr: "Cette attaque peut être utilisée même si ce Pokémon est Endormi. S'il l'est, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow",
			fr: "Avale",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
