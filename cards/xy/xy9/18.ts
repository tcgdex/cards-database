import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-18",
	localId: 18,

	// Card informations
	name: {
		en: "Golduck BREAK",
		fr: "Akwakwak TURBO",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/18/high",
		},
	},

	evolveFrom: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 446,
		type: AbilityType.TALENT,
		name: {
			en: "Hyper Transfer",
			fr: "Hyper Transfert",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		}
	}],

	attacks: [{
		name: {
			fr: "Règle des Évolutions TURBO",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
