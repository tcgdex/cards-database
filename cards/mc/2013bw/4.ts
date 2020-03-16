import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import bw2013 from '../../../sets/mc/2013bw'

const card: Card = {
	id: "2013bw-4",
	localId: 4,
	dexId: 471,

	name: {
		fr: "Givrali"
	},

	hp: 90,

	type: [
		Type.WATER
	],

	tags: [
		Tag.STAGE1
	],

	attacks: [
		{
			name: {
				fr: "Vive-Attaque"
			},
			text: {
				fr: "Lancez une pièce. Si c'est face, cetter attaque inflige 30 dégâts supplémentaires."
			},
			damage: "10+",
			cost: [
				Type.COLORLESS
			]
		}, {
			name: {
				fr: "ranvoi d'Énergie"
			},
			text: {
				fr: "Déplacez une Énergie de ce Pokémon vers 1 de vos Pokémon de Banc."
			},
			damage: 40,
			cost: [
				Type.WATER,
				Type.COLORLESS
			]
		}
	],

	weaknesses: [{
		type: Type.METAL,
		value: "x2"
	}],

	set: bw2013,

	retreat: 1,

	rarity: Rarity.Common,

	illustrator: "Rya Ueda",

	category: Category.POKEMON
}

export default card
