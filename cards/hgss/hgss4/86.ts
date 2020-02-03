import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-86",
	localId: 86,

	// Card informations
	name: {
		en: "Indigo Plateau",
		fr: "Plateau Indigo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/86/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/86/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		},
	},{
		name: {},
		text: {
			fr: "Chaque Pokémon LÉGENDE en jeu (les vôtres et ceux de votre adversaire) reçoit +30 PV.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS��Triumphant",
		code: "hgss4"
	}
}

export default card

