import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: `2021swsh-16`,
	localId: 16,

	// Card informations
	name: {
		en: "Scorbunny",
		fr: "Flambino",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Super Singe",
			fr: "Super Roussi",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set,
}

export default card
