import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-80",
	localId: 80,

	// Card informations
	name: {
		en: "PlusPower",
		fr: "PlusPower",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/80/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/80/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez PlusPower à l'un de vos Pokémon. Une fois votre tour terminé, défaussez cette carte. Si la carte PlusPower est attachée à un Pokémon effectuant une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
