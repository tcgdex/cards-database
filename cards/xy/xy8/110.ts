import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-110",
	localId: 110,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/110/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/110/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/110/high.png",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Slayer",
			fr: "Dragon Slayer",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Dragon Pokémon, this attack does 40 more damage (before applying Weakness and Resistance).",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

