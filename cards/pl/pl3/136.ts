import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-136",
	localId: 136,

	// Card informations
	name: {
		en: "Cynthia's Guidance",
		fr: "Les conseils de Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/136/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/136/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/136/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez les autres cartes au-dessus du deck. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
