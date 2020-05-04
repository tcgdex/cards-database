import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-101",
	localId: 101,

	// Card informations
	name: {
		en: "Fossil Excavation Kit",
		fr: "Kit d'Excavation de Fossiles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/101/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/101/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez de votre pile de défausse à votre main une combinaison de 2 cartes choisies parmi Fossile Nautile Amonita, Fossile Dôme Kabuto et Vieil Ambre Ptéra.",
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
