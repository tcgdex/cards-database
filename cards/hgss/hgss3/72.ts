import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-72",
	localId: 72,

	// Card informations
	name: {
		en: "Defender",
		fr: "Défenseur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/72/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/72/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/72/high",
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
			fr: "Attachez Défenseur à l'un de vos Pokémon. Défaussez cette carte une fois le prochain tour de votre adversaire terminé. \nTous les dégâts d'attaque infligés par votre adversaire au Pokémon auquel Défenseur est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
