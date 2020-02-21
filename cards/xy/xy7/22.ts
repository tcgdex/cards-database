import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-22",
	localId: 22,

	// Card informations
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/22/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/22/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/22/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 1282,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Effect",
			fr: "Effet Aqua",
		},
		text: {
			en: "Each of your Stage 1 Pokémon in play is now a Water Pokémon in addition to its existing types.",
			fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Water en plus de ses types existants.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
