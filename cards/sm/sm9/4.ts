import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-4",
	localId: 4,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/4/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 1257,
		type: AbilityType.TALENT,
		name: {
			en: "Grass Cushion",
			fr: "Coussin Plante",
		},
		text: {
			en: "If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Si de l’Énergie Grass est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
