import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-25",
	localId: 25,

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Meal Time",
			fr: "À Belles Dents",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, draw a card.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, piochez une carte.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: set
}

export default card
