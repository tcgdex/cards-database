import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY106",
	localId: "XY106",

	// Card informations
	name: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stormy Seas",
			fr: "Mers Orageuses",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
