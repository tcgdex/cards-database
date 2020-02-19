import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/91/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/91/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez Fossile Nautile comme si c'était un Pokémon de base Colorless. (Fossile Nautile compte aussi comme une carte Dresseur mais si Fossile Nautile est mise K.O, elle compte comme un Pokémon K.O.) Fossile Nautile ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Nautile. (Cela ne compte pas comme un Pokémon K.O).",
		},
	},{
		name: {
			fr: "Aqua réaction:",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

