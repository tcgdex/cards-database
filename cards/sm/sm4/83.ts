import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/83/high",
		},
	},

	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Hunting",
			fr: "Chasse Aérienne",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by the damage from this attack, switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 120
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
