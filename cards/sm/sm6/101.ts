import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-101",
	localId: 101,

	// Card informations
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 715,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/101/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/101/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/101/high",
		},
	},

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "You Iribi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Resonance",
			fr: "Résonance",
		},
		text: {
			en: "If your opponent's Active Pokémon is Confused, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
