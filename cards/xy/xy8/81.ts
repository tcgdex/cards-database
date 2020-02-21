import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-81",
	localId: 81,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/81/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
			fr: "Recul",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gathering Footsteps",
			fr: "Collecte d'Empreintes",
		},
		text: {
			en: "This attack does 10 more damage for each Colorless in the Retreat Cost of your Swinub, Piloswine, and Mamoswine.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite de votre Marcacrin, Cochignon et Mammochon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
