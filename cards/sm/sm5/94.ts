import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-94",
	localId: 94,

	// Card informations
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 786,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Psywave",
			fr: "Vague Psy",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Swap",
			fr: "Permutation Magique",
		},
		text: {
			en: "Move any number of damage counters on your opponent's Pokémon to their other Pokémon in any way you like.",
			fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers ses autres Pokémon, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
