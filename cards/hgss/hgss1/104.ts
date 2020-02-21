import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une énergie Multicolore à l’un de vos Pokémon. En jeu, l’énergie multicolore fournit tout type d’énergie, mais une seule énergie à la fois. (Fournit uniquement de l’énergie.) Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez un marqueur de dégâts sur ce Pokémon. (Lorsqu’elle n’est pas en jeu, l’énergie multicolore compte comme de l’énergie Colorless.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
