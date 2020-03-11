import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-185",
	localId: 185,

	// Card informations
	name: {
		en: "Vitality Band",
		fr: "Bandeau Vitalité",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/185/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/185/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			en: "The attacks of the Pokémon this card is attached to do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
