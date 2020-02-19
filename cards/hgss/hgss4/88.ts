import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/88/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/88/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



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

