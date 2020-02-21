import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Dustox",
		fr: "Papinox",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/25/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/25/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/25/high",
		},
	},

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stun Spore",
			fr: "Para-spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Dust",
			fr: "Poussière toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
