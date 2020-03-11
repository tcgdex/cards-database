import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-72",
	localId: 72,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/72/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dancing Tentacles",
			fr: "Tentacules Dansantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Stick and Absorb",
			fr: "Colle et Absorbe",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Soignez 30 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
