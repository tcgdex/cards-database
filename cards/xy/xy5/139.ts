import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-139",
	localId: 139,

	// Card informations
	name: {
		en: "Shrine of Memories",
		fr: "Sanctuaire des Souvenirs",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/139/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/139/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon évolués de chaque joueur peuvent utiliser les attaques de leurs pré-évolutions. (Le joueur a toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
