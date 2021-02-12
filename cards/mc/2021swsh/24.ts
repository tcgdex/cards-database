import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-24",
	localId: 24,

	// Card informations
	name: {
		en: "Sobble",
		fr: "Larméléon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bind",
			fr: "Étreinte",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set,
}

export default card
