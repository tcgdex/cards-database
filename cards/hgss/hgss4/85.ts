import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Black Belt",
		fr: "Karatéka",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/85/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/85/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez utiliser cette carte uniquement s'il vous reste plus de cartes Récompense que votre adversaire. Pendant ce tour, chaque attaque de votre Pokémon Actif inflige 40 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
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

