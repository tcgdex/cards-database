import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-40",
	localId: 40,

	// Card informations
	name: {
		en: "Shining Mew",
		fr: "Mew Brillant",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Legendary Guidance",
			fr: "Conseil Légendaire",
		},
		text: {
			en: "Search your deck for up to 2 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Beam",
			fr: "Rayon",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
