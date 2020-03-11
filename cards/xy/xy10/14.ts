import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-14",
	localId: 14,

	// Card informations
	name: {
		en: "Delphox BREAK",
		fr: "Goupelin TURBO",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/14/high",
		},
	},

	evolveFrom: {
		en: "Delphox",
		fr: "Goupelin",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 652,
		type: AbilityType.TALENT,
		name: {
			en: "Flare Witch",
			fr: "Sorcier Flamboyant",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		name: {
			fr: "Règle des Évolutions TURBO",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
