import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-73",
	localId: 73,

	// Card informations
	name: {
		en: "Emcee's Chatter",
		fr: "Bavardage du maître",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/73/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/73/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c'est face, piochez 3 cartes. Si c'est pile, piochez 2 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
