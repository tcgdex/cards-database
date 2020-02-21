import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-104",
	localId: 104,

	// Card informations
	name: {
		en: "Florges BREAK",
		fr: "Florges TURBO",
	},

	hp: 140,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/104/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/104/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/104/high",
		},
	},

	evolveFrom: {
		en: "Florges",
		fr: "Florges",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 627,
		type: AbilityType.TALENT,
		name: {
			en: "Floral Breeze",
			fr: "Brise Florale",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 30 damage and remove a Special Condition from your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts et retirer un État Spécial de votre Pokémon Actif.",
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
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
