import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-68",
	localId: 68,

	// Card informations
	name: {
		en: "Lugia-EX",
		fr: "Lugia-EX",
	},

	hp: 170,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/68/high",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aero Ball",
			fr: "Aéro Ball",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deep Hurricane",
			fr: "Ouragan Intense",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 70 more damage. Then, discard that Stadium card.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 70 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
