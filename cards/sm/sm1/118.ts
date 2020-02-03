import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-118",
	localId: 118,

	// Card informations
	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/118/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/118/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer 1 carte d’Énergie de base de ce Pokémon vers le Pokémon auquel cette carte est attachée.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

