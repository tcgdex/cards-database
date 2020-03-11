import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Seismitoad-EX",
		fr: "Crapustule-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 537,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/20/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/20/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quaking Punch",
			fr: "Poing Chevrotant",
		},
		text: {
			en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Grenade Hammer",
			fr: "Explo-Maillet",
		},
		text: {
			en: "This attack does 30 damage to 2 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 2 de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
