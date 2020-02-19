import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-63",
	localId: 63,

	// Card informations
	name: {
		en: "Heatran",
		fr: "Heatran",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/63/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/63/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/63/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steel Drop",
			fr: "Démolition Contrôlée",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 40 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 40
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steam Blast",
			fr: "Geyser de Vapeur",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

