import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-77",
	localId: 77,

	// Card informations
	name: {
		en: "Swinub",
		fr: "Swinub",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 220,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/77/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/77/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/77/high",
		},
	},

	evolveFrom: {
		fr: "Marcacrin",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Freezing Breath",
			fr: "Souffle glacial",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Flip a coin. If tails, Swinub does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Marcacrin s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
