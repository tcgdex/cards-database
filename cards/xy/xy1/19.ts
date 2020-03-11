import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 673,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/19/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/19/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/19/high",
		},
	},

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lead",
			fr: "Mentor",
		},
		text: {
			en: "Search your deck for up to 2 Supporter cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 cartes Supporter dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Charge Dash",
			fr: "Attaque Précipitée",
		},
		text: {
			en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
