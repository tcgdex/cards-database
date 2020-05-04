import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-89",
	localId: 89,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "otumami",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-Son",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fairy Lock",
			fr: "Verrou Enchanté",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
