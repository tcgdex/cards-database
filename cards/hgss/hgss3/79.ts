import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/79/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/79/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/79/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel est attachée Énergie Obscurité lance une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Obscurité n'est pas Darkness. Énergie Obscurité fournit de l'Énergie Darkness. (Ne compte pas comme une carte Énergie de base.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

