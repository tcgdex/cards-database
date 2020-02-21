import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-136",
	localId: 136,

	// Card informations
	name: {
		en: "Technical Machine TS-1",
		fr: "Machine Technique TS-1",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/136/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/136/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/136/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TECHNICALMACHINE,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez cette carte à 1 de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne.",
		},
	},{
		name: {
			fr: "Évolutionneur",
		},
		text: {
			fr: "Cherchez dans votre deck une carte évoluant d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
