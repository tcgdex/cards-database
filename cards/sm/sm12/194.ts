import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-194",
	localId: 194,

	// Card informations
	name: {
		en: "Island Challenge Amulet",
		fr: "Amulette du Tour des Îles",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/194/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/194/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/194/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/194/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon-GX ou Pokémon-EX auquel cette carte est attachée a -100 PV, et lorsqu'il est mis K.O. par les dégâts de l’attaque d’un adversaire, ce joueur-là prend une carte Récompense de moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

