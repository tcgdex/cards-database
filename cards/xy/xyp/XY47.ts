import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY47",
	localId: "XY47",

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY47/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY47/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY47/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1348,
		type: AbilityType.TALENT,
		name: {
			en: "Dry Skin",
			fr: "Peau Sèche",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks from your opponent's Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
