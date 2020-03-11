import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY45",
	localId: "XY45",

	// Card informations
	name: {
		en: "Gallade-EX",
		fr: "Gallame-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY45/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY45/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Assault Sword",
			fr: "Lame d'Assaut",
		},
		text: {
			en: "If your opponent's Active Pokémon has no Energy attached to it, this attack does 40 more damage.",
			fr: "Si aucune Énergie n'est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Slash",
			fr: "Entaille Croisée",
		},
		text: {
			en: "This Pokémon can't use Cross Slash during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Entaille Croisée pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
