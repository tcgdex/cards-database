import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm12/194/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/194/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/194/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/194/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "sadaji",



	attacks: [{
		name: {},
		text: {
			fr: "Le Pokémon-GX ou Pokémon-EX auquel cette carte est attachée a -100 PV, et lorsqu'il est mis K.O. par les dégâts de l’attaque d’un adversaire, ce joueur-là prend une carte Récompense de moins.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
