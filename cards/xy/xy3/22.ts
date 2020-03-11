import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Beartic",
		fr: "Polagriffe",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 614,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/22/high",
		},
	},

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Igloo Hold",
			fr: "Piège Igloo",
		},
		text: {
			en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mountain Drop",
			fr: "Montagne Écrasante",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 40 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
