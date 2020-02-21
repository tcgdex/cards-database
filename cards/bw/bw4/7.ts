import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 512,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/7/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/7/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/7/high",
		},
	},

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stadium Drain",
			fr: "Vampire de Stade",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 more damage and heal 30 damage from this Pokémon.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
