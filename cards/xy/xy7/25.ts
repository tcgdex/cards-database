import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-25",
	localId: 25,

	// Card informations
	name: {
		en: "Kyurem-EX",
		fr: "Kyurem-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Glaciate",
			fr: "Ère Glaciaire",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icecalibur",
			fr: "Glacecalibur",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
