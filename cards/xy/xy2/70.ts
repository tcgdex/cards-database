import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-70",
	localId: 70,

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryota Murayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Revenge",
			fr: "Vendetta",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 70 more damage.",
			fr: "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
