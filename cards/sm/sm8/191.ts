import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-191",
	localId: 191,

	// Card informations
	name: {
		en: "Thunder Mountain ◇",
		fr: "Mont Tonnerre ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/191/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/191/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/191/high",
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
			fr: "Les attaques des Pokémon Lightning (les vôtres et ceux de votre adversaire) coûtent Lightning de moins.\n\nChaque fois qu’un joueur joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte-là sur cette carte Stade.",
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
