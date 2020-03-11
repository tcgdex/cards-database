import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-145",
	localId: 145,

	// Card informations
	name: {
		en: "Parallel City",
		fr: "Cité Parallèle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/145/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/145/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/145/high",
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
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Grass, Fire ou Water de ce joueur ↓ sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		name: {},
		text: {
			fr: "Choisissez l'orientation de cette carte avant de la jouer. Ce joueur ↓ ne peut pas avoir plus de 3 Pokémon de Banc.\n\n(Quand cette carte est en jeu, ce joueur ↓ défausse des Pokémon de Banc jusqu'à en avoir 3 sur le Banc.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
