import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-268",
	localId: 268,

	// Card informations
	name: {
		en: "Martial Arts Dojo",
		fr: "Dojo des Arts Martiaux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/268/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/268/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/268/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/268/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques des Pokémon non Ultra-Chimères auxquels est attachée de l’Énergie Fighting de base (les vôtres et ceux de votre adversaire) infligent 10 dégâts supplémentaires au Pokémon Actif de l’adversaire (avant application de la Faiblesse et de la Résistance). S’il reste plus de cartes Récompense au joueur attaquant qu’à son adversaire, ces attaques infligent 40 dégâts supplémentaires au lieu de 10.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
