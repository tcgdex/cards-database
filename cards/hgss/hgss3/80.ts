import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-80",
	localId: 80,

	// Card informations
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/80/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/80/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/80/high.png",
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
			fr: "Les dégâts d'attaque infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Métal n'est pas Metal. Énergie Métal fournit de l'Énergie Metal. (Ne compte pas comme une carte Énergie de base.)",
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

