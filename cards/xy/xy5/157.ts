import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-157",
	localId: 157,

	// Card informations
	name: {
		en: "Archie's Ace in the Hole",
		fr: "Dernier Recours d'Arthur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/157/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/157/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/157/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte seulement lorsque c'est la dernière carte dans votre main.\n\nPlacez un Pokémon Water de votre pile de défausse sur votre Banc. Ensuite, piochez 5 cartes.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
