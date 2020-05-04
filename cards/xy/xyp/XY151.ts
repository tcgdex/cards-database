import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY151",
	localId: "XY151",

	// Card informations
	name: {
		en: "Zygarde-EX",
		fr: "Zygarde-EX",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY151/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY151/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY151/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Land's Pulse",
			fr: "Vibration Terrestre",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 20 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Cell Storm",
			fr: "Tempête Cellulaire",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Land's Wrath",
			fr: "Force Chtonienne",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
