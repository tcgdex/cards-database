import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm9/178/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/178/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/178/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/178/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



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
