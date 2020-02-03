import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy10/94/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/94/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

