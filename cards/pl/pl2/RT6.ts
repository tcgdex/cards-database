import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-RT6",
	localId: "RT6",

	// Card informations
	name: {
		en: "Charon's Choice",
		fr: "Le choix de Pluton",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT6/high",
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
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. Lorsque votre tour est terminé, placez cette carte dans votre main au lieu de la défausser.",
		},
	},{
		name: {},
		text: {
			fr: "Cherchez n'importe quel Motisma dans votre deck et échangez-le avec n'importe quel Motisma que vous avez en jeu. Toutes les cartes attachées à Motisma ainsi que ses marqueurs de dégât se trouvent désormais sur le nouveau Pokémon. (Retirez à Motisma tous ses États Spéciaux et tous ses effets). Placez Motisma au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
