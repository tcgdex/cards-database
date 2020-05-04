import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-145",
	localId: 145,

	// Card informations
	name: {
		en: "Trevenant-EX",
		fr: "Desséliande-EEX",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/145/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/145/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Dark Forest",
			fr: "Forêt Sombre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wood Blast",
			fr: "Explobois",
		},
		text: {
			en: "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
