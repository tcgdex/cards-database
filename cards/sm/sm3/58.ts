import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-58",
	localId: 58,

	// Card informations
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 545,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/58/high",
		},
	},

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Horn",
			fr: "Corne Empoisonnée",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 80
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Steamroller",
			fr: "Bulldoboule",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
