import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY70",
	localId: "XY70",

	// Card informations
	name: {
		en: "Tyrantrum-EX",
		fr: "Rexillius-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 697,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1405,
		type: AbilityType.TALENT,
		name: {
			en: "Despotic Fang",
			fr: "Croc Despotique",
		},
		text: {
			en: "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts des attaques de ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Impact",
		},
		text: {
			en: "Discard 3 Energy attached to this Pokémon.",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

