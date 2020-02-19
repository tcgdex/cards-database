import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-130",
	localId: 130,

	// Card informations
	name: {
		en: "Buck's Training",
		fr: "L'entrainement de Cornil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/130/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/130/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/130/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Tant que l'entrainement de Cornil se trouve à côté de votre Pokémon Actif, les attaques de chacun de vos Pokémon Actifs infligent 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
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

