import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-149",
	localId: 149,

	// Card informations
	name: {
		en: "Morgan",
		fr: "Aurore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/149/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/149/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/149/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/149/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez Méridia, Vesper et Nix de votre main.\n\nRegardez les 12 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie trouvées à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

