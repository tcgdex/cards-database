import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-145",
	localId: 145,

	// Card informations
	name: {
		en: "Skarmory-EX",
		fr: "Airmure-EX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/145/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/145/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Joust",
			fr: "Joute",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Tailspin Piledriver",
			fr: "Vrille Incontrôlable",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
