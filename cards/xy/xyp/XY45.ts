import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xyp/XY45/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY45/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



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

