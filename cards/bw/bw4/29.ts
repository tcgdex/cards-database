import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 516,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/29/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/29/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/29/high",
		},
	},

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.WATER
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Stadium Wave",
			fr: "Innondation du Stade",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 more damage and the Defending Pokémon is now Asleep.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
