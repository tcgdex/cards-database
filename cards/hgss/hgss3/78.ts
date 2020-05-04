import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Team Rocket's Trickery",
		fr: "Fourberie de la Team Rocket",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/78/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/78/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Takao Unno",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Piochez 2 cartes. Ensuite, votre adversaire défausse une carte de sa main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
