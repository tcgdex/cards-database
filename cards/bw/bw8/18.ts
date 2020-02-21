import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-18",
	localId: 18,

	// Card informations
	name: {
		en: "Victini-EX",
		fr: "Victini-EX",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/18/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/18/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/18/high",
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
			Type.FIRE
		],
		name: {
			en: "Turbo Energize",
			fr: "Énergisant Spontané",
		},
		text: {
			en: "Search your deck for 2 basic Energy cards and attach them to your Benched Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Cherchez 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon de Banc, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Intensifying Burn",
			fr: "Rage Brûlante",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
