import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/11/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/11/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/11/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twin Bursts",
			fr: "Explosions en Duo",
		},
		text: {
			en: "If Electivire is on your Bench, this attack does 80 more damage.",
			fr: "Si Élekable est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
