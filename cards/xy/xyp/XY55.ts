import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY55",
	localId: "XY55",

	// Card informations
	name: {
		en: "Swampert-EX",
		fr: "Laggron-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY55/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY55/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY55/high",
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



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Flood",
			fr: "Invasion Boueuse",
		},
		text: {
			en: "Reveal the top 4 cards of your deck. This attack does 40 more damage for each Water Energy you find there. Shuffle the revealed cards back into your deck.",
			fr: "Montrez les 4 cartes du dessus de votre deck. Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Water que vous y trouvez. Mélangez les cartes montrées avec votre deck.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Tackle",
			fr: "Hydro-Charge",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
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
