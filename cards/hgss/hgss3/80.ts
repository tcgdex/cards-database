import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/80/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/80/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {},
		text: {
			fr: "Les dégâts d'attaque infligés au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Métal n'est pas Metal. Énergie Métal fournit de l'Énergie Metal. (Ne compte pas comme une carte Énergie de base.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
