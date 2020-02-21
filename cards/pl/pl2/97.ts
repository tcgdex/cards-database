import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-97",
	localId: 97,

	// Card informations
	name: {
		en: "Underground Expedition",
		fr: "Expédition souterraine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/97/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/97/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessous de votre deck. Choisissez-y n'importe quelles 2 cartes et placez-les dans votre main. Replacez les cartes restantes au dessous de votre deck dans n'importe quel ordre.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
