import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-80",
	localId: 80,

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorb",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/80/high",
		},
	},

	evolveFrom: {
		fr: "Voltorbe",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		name: {
			en: "Screech",
			fr: "Voix stridente",
		},
		text: {
			en: "If an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to that Pokémon until the end of your next turn.",
			fr: "Si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque lui inflige 20 dégâts supplémentaires jusqu'à la fin de votre prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
			fr: "Double tour",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
