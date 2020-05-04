import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-35",
	localId: 35,

	// Card informations
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/35/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/35/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/35/high",
		},
	},

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Bulk Up",
			fr: "Gonflette",
		},
		text: {
			en: "During your next turn, each of Combusken's attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			fr: "Lors de votre prochain tour, chacune des attaques de Galifeu inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
