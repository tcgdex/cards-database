import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-12",
	localId: 12,

	// Card informations
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 186,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/12/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/12/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/12/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 553,
		type: AbilityType.POKEBODY,
		name: {
			en: "Enthusiasm",
			fr: "Enthousiasme",
		},
		text: {
			en: "If you have Poliwag, Poliwhirl, and Poliwrath in play, each of these Pokémon's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			fr: "Si vous possédez Ptitard, Tetarte et Tartard en jeu, chacune des attaques de ces Pokémon inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Frog Hop",
			fr: "Bond de grenouille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
