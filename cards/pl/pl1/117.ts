import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-103 Power Spray",
		fr: "Spray Puissant Invention G-103 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/117/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/117/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/117/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte lors du tour de votre adversaire lorsque le Pokémon de votre adversaire utilise un Poké-Power. Prévenez tous les effets de ce Poké-Power. (Cela compte comme si ce Pokémon utilisait son Poké-Power.) Si vous avez un maximum de 2 Pokémon SP en jeu, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

