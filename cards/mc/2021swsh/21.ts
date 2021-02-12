import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {
	id: "2021swsh-1",
	localId: 1,
	dexId: 1,

	name: {
		en: "Bulbasaur"
	},

	hp: 70,

	type: [
		Type.GRASS
	],

	tags: [
		Tag.BASIC
	],

	attacks: [
		{
			name: {
				en: "Razor Leaf"
			},
			cost: [
				Type.GRASS,
				Type.COLORLESS
			],
			damage: 30
		}
	],

	weaknesses: [{
		type: Type.FIRE,
		value: "x2"
	}],

	set: set,

	retreat: 2,

	rarity: Rarity.NONE,

	illustrator: "Sanosuke Sakuma",

	category: Category.POKEMON
}

export default card
