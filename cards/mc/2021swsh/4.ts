import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {
	id: "2021swsh-4",
	localId: 4,
	dexId: 1,

	name: {
		en: "Turtwig"
	},

	hp: 80,

	type: [
		Type.GRASS
	],

	tags: [
		Tag.BASIC
	],

	attacks: [
		{
			name: {
				en: 'Tackle'
			},
			cost: [
				Type.COLORLESS,
				Type.COLORLESS
			],
			damage: 20
		},
		{
			name: {
				en: "Razor Leaf"
			},
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS
			],
			damage: 50
		}
	],

	weaknesses: [{
		type: Type.FIRE,
		value: "x2"
	}],

	set: set,

	retreat: 2,

	rarity: Rarity.NONE,

	illustrator: "OOYAMA",

	category: Category.POKEMON
}

export default card
