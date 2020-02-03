import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-137",
	localId: 137,

	// Card informations
	name: {
		en: "Technical Machine TS-2",
		fr: "Machine Technique TS-2",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/137/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/137/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/137/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/137/high.png",
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
			fr: "Dés-Évolutionneur",
		},
		text: {
			fr: "Choisissez 1 des Pokémon Évolués de votre adversaire (Pokémon LV.X exclus). Retirez à ce Pokémon sa carte au niveau d'Évolution le plus élevé et replacez cette carte dans la main de votre adversaire.",
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

