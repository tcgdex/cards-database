import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-70",
	localId: 70,

	// Card informations
	name: {
		en: "Xurkitree",
		fr: "Câblifère",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 796,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Three Mirrors",
			fr: "Triple Reflet",
		},
		text: {
			en: "If your opponent has exactly 3 Prize cards remaining, this attack does 90 more damage.",
			fr: "S’il reste exactement 3 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Signal Beam",
			fr: "Rayon Signal",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
