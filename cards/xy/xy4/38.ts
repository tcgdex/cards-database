import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 317,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/38/high",
		},
	},

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Gas",
			fr: "Gaz Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
			fr: "Engloutissement",
		},
		text: {
			en: "If, before doing damage, your opponent's Active Pokémon has fewer remaining HP than this Pokémon, this attack does 50 more damage.",
			fr: "Si, avant d'infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
