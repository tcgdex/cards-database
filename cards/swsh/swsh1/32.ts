import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Raboot",
		fr: "Lapyro",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/32/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/32/low.png",
		}
	},

	evolveFrom: {
		en: "Scorbunny",
		fr: "Flambino",
	},

	evolveTo: [{
		en: "Cinderace",
		fr: "Pyrobut",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 26,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Feu, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Kick",
			fr: "Coup d’Pied Magnum",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
