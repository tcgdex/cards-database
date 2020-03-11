import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-38",
	localId: 38,

	// Card informations
	name: {
		en: "Wailord-EX",
		fr: "Wailord-EX",
	},

	hp: 250,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/38/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/38/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 1157,
		type: AbilityType.TALENT,
		name: {
			en: "Water Veil",
			fr: "Ignifu-Voile",
		},
		text: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "High Breaching",
			fr: "Saut Spectaculaire",
		},
		text: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
