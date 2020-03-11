import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-25",
	localId: 25,

	// Card informations
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/25/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dashing Punch",
			fr: "Poing Épique",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 50 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Whirlpool",
			fr: "Siphon",
		},
		text: {
			en: "Discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
