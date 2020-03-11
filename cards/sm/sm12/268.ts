import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "5ban Graphics",



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
