import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-83",
	localId: 83,

	// Card informations
	name: {
		en: "Energy Link",
		fr: "Energy Link [Pokémon Tool]",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/83/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/83/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Tant que Chaîne d’énergie est attachée à un Pokémon, vous pouvez déplacer une carte Énergie attachée à ce Pokémon sur un autre de vos Pokémon possédant Chaîne d’énergie. Vous pouvez utiliser cet effet autant de fois que vous le voulez lors de votre tour.",
		},
	},{
		name: {},
		text: {
			fr: "Attachez Chaîne d’énergie à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

