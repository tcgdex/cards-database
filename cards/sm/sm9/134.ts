import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-134",
	localId: 134,

	// Card informations
	name: {
		en: "Black Market ◇",
		fr: "Marché Noir ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/134/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Lorsqu’un Pokémon Darkness (le vôtre ou celui de votre adversaire) auquel de l’Énergie Darkness est attachée est mis K.O. par les dégâts d’une attaque d’un adversaire, ce joueur récupère une carte Récompense de moins.\n\nChaque fois qu’un joueur joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte-là sur cette carte Stade.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
