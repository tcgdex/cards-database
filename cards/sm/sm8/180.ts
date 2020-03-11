import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-180",
	localId: 180,

	// Card informations
	name: {
		en: "Life Forest ◇",
		fr: "Forêt Vitale ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/180/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/180/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/180/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/180/high",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut soigner 60 dégâts et retirer tous les États Spéciaux de l’un de ses Pokémon Grass.\n\nChaque fois qu’un joueur joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte-là sur cette carte Stade.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
