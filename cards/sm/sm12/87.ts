import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-87",
	localId: 87,

	// Card informations
	name: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 527,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nasal Suction",
			fr: "Succion Nasale",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Air Cutter",
			fr: "Tranch’Air",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 30
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
