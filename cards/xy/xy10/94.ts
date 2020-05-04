import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Chaos Tower",
		fr: "Tour du Chaos",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/94/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/94/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Les Pokémon de ce ↓ joueur ne peuvent être ni Confus ni Empoisonnés. (Si ces Pokémon sont déjà Confus ou Empoisonnés, retirez ces États Spéciaux.)",
		},
	},{
		name: {},
		text: {
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Les Pokémon de ce ↓ joueur ne peuvent être ni Endormis ni Paralysés. (Si ces Pokémon sont déjà Endormis ou Paralysés, retirez ces États Spéciaux.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
