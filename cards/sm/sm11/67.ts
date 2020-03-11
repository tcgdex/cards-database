import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-67",
	localId: 67,

	// Card informations
	name: {
		en: "Stunfisk",
		fr: "Limonde",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 618,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Trap Bolt",
			fr: "Piège Foudre",
		},
		text: {
			en: "If, before doing damage, your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 30 more damage.",
			fr: "Si, avant d’infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
