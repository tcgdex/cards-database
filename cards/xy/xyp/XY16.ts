import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY16",
	localId: "XY16",

	// Card informations
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 673,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY16/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY16/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY16/high",
		},
	},

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
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
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Forest Press",
			fr: "Pression de la Forêt",
		},
		text: {
			en: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
