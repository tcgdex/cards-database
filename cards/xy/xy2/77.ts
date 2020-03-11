import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/77/high",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



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
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Gust",
			fr: "Tornade Puissante",
		},
		text: {
			en: "During your next turn, this Pokémon's Strong Gust attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Souffle Puissant de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
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
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
