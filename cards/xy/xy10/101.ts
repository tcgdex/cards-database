import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy10/101/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/101/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez de votre pile de défausse à votre main une combinaison de 2 cartes choisies parmi Fossile Nautile Amonita, Fossile Dôme Kabuto et Vieil Ambre Ptéra.",
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

