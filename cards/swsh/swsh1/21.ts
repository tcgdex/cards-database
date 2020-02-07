import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Eldegoss",
		fr: "Blancoton",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/21/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/21/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/21/high.png",
		},
	},

	evolveFrom: {
		en: "Gossifleur",
		fr: "Tournicoton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 13,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Blessing of Fluff",
			fr: "Bénédiction Douillette",
		},
		text: {
			en: "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

