import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-117",
	localId: 117,

	// Card informations
	name: {
		en: "Blend Energy GrassFirePsychicDarkness",
		fr: "Énergie Amalgamée GrassFirePsychicDarkness",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/117/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/117/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/117/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l'Énergie Colorless. Lorsque cette carte est attachée à un Pokémon, cette carte fournit de l'Énergie Grass, Fire, Psychic ou Darkness mais ne fournit qu'une Énergie à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
