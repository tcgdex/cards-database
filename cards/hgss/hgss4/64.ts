import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-64",
	localId: 64,

	// Card informations
	name: {
		en: "Illumise",
		fr: "Lumivole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 314,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/64/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/64/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/64/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux parfum",
		},
		text: {
			en: "Remove 3 damage counters from 1 of your Pokémon.",
			fr: "Retirez 3 marqueurs de dégât à l'un de vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Vulcan Beat",
			fr: "Vulcanatak",
		},
		text: {
			en: "Flip a coin for each Volbeat you have in play. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce pour chacun de vos Muciole en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

