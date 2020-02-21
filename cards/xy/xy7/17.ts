import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-17",
	localId: 17,

	// Card informations
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/17/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Solar Birth",
			fr: "Naissance Solaire",
		},
		text: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, search your deck for up to 2 basic Energy cards and attach them to that Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, cherchez jusqu'à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon choisi. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
