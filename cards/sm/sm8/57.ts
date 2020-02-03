import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-57",
	localId: 57,

	// Card informations
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/57/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/57/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/57/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Happy Delivery",
			fr: "Livraison en Fanfare",
		},
		text: {
			en: "Choose any number of your Benched Pokémon that don't already have a Pokémon Tool attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Choisissez autant de vos Pokémon de Banc auxquels aucun Outil Pokémon n’est attaché que vous voulez. Pour chacun de ces Pokémon, cherchez une carte Outil Pokémon dans votre deck et attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

