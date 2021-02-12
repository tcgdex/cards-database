import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {
	id: "2021swsh-3",
	localId: 3,
	dexId: 252,

	name: {
		en: "Treecko"
	},

	hp: 60,

	type: [
		Type.GRASS
	],

	tags: [
		Tag.BASIC
	],

	attacks: [
		{
			name: {
				en: "Quick Attack"
			},
			cost: [
				Type.GRASS,
				Type.COLORLESS
			],
			damage: "10+",
			text: {
				en: "Flip a coin. If heads, this attack does 10 more damage."
			}
		}
	],

	weaknesses: [{
		type: Type.FIRE,
		value: "x2"
	}],

	set: set,

	retreat: 1,

	rarity: Rarity.NONE,

	illustrator: "Akira Komayama",

	category: Category.POKEMON
}

export default card
