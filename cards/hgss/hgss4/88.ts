import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-88",
	localId: 88,

	// Card informations
	name: {
		en: "Seeker",
		fr: "Détecteur",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/88/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/88/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Wataru Kawahara",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Chaque joueur récupère l'un de ses Pokémon de Banc dans sa main, ainsi que toutes les cartes qui lui sont attachées. (Vous récupérez votre Pokémon en premier.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
