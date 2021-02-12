import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const id = 2

const card: Card = {
	id: `2021swsh-${id}`,
	localId: id,
	dexId: 152,

	name: {
		en: "Chikorita"
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
				en: "Mini Drain"
			},
			cost: [
				Type.GRASS
			],
			damage: 10,
			text: {
				en: 'Heal 10 damage from this Pokémon.'
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

	illustrator: "sowsow",

	category: Category.POKEMON
}

export default card
