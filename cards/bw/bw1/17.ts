import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Pignite",
		fr: "Grotichon",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 499,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/17/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/17/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/17/high.png",
		},
	},

	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

