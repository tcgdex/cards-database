import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-178",
	localId: 178,

	// Card informations
	name: {
		en: "Morgan",
		fr: "Aurore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/178/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/178/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/178/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/178/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez Méridia, Vesper et Nix de votre main.\n\nRegardez les 12 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

