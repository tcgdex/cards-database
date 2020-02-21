import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Furfrou",
		fr: "Couafarel",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 676,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/114/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/114/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 366,
		type: AbilityType.TALENT,
		name: {
			en: "Fur Coat",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Cutoff",
			fr: "Toison Épaisse",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Coupure d'Énergie",
		},
		text: {
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
