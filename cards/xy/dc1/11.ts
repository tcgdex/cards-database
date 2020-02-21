import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Team Magma's Claydol",
		fr: "Kaorine de la Team Magma",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/11/high",
		},
	},

	evolveFrom: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de la Team Magma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 765,
		type: AbilityType.TALENT,
		name: {
			en: "Magma Switch",
			fr: "Échange de Magma",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to 1 of your Team Magma Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers l'un de vos Pokémon de la Team Magma.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Beam",
			fr: "Puissant Rayon",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
