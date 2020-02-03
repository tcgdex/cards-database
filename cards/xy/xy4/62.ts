import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Dialga-EX",
		fr: "Dialga-EX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/62/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/62/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/62/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chrono Wind",
			fr: "Vent Temporel",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn.",
			fr: "Si le Pokémon Défenseur est un Pokémon-EX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Full Metal Impact",
			fr: "Full Metal Impact",
		},
		text: {
			en: "Discard 2 Metal Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies Metal attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

