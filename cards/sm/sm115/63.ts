import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-63",
	localId: 63,

	// Card informations
	name: {
		en: "Misty's Water Command",
		fr: "Maîtrise Aquatique d’Ondine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/63/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/63/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/63/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez autant d’Énergies Water que vous le voulez de vos Pokémon vers vos Psykokwak, Hypotrempe, Stari, Staross-GX, Magicarpe, Léviator ou Lokhlass, de la manière que vous voulez.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card

