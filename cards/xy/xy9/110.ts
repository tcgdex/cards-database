import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-110",
	localId: 110,

	// Card informations
	name: {
		en: "Reverse Valley",
		fr: "Vallée Inverse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Tous les dégâts infligés aux Pokémon Metal de ce ↓ joueur par une attaque de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		name: {},
		text: {
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Les attaques des Pokémon Darkness de ce ↓ joueur infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
