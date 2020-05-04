import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/104/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/104/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/104/high",
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
			fr: "Attachez une énergie Multicolore à l’un de vos Pokémon. En jeu, l’énergie multicolore fournit tout type d’énergie, mais une seule énergie à la fois. (Fournit uniquement de l’énergie.) Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon. (Lorsqu’elle n’est pas en jeu, l’énergie multicolore compte comme de l’énergie Colorless.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
