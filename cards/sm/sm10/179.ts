import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-179",
	localId: 179,

	// Card informations
	name: {
		en: "Martial Arts Dojo",
		fr: "Dojo des Arts Martiaux",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/179/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/179/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/179/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/179/high",
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







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
