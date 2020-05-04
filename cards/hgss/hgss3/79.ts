import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/79/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/79/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/79/high",
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
			fr: "Si le Pokémon auquel est attachée Énergie Obscurité lance une attaque, cette dernière inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel est attachée Énergie Obscurité n'est pas Darkness. Énergie Obscurité fournit de l'Énergie Darkness. (Ne compte pas comme une carte Énergie de base.)",
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
