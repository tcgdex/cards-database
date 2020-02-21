import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-67",
	localId: 67,

	// Card informations
	name: {
		en: "Florges-EX",
		fr: "Florges-EX",
	},

	hp: 160,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/67/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/67/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/67/high",
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
			Type.FAIRY
		],
		name: {
			en: "Lead",
			fr: "Mentor",
		},
		text: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Bright Garden",
			fr: "Jardin Radieux",
		},
		text: {
			en: "This attack does 20 damage times the number of Grass Pokémon and Fairy Pokémon you have in play.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Grass et de Pokémon Fairy que vous avez en jeu.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
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
