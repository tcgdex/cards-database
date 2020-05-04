import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-80",
	localId: 80,

	// Card informations
	name: {
		en: "Unown W",
		fr: "Zarbi W",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuaki Aihara",

	abilities: [{
		id: 1078,
		type: AbilityType.POKEBODY,
		name: {
			en: "WALL",
			fr: "WALL",
		},
		text: {
			en: "As long as Unown W is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Tant que Zarbi V est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
