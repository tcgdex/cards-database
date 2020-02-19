import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/80/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/80/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/80/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 68,
		name: "Takashi Yamaguchi"
	},



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

