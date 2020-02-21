import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Roselia",
		fr: "Roselia",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 315,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/96/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/96/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/96/high",
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
			Type.GRASS
		],
		name: {
			en: "Toxic Spikes",
			fr: "Pics Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. If Roselia is evolved from Budew, this attack does 10 damage to the Defending Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si Roselia évolue de Rozbouton,  cette attaque inflige 10 dégâts au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Sweet Spike",
			fr: "Douce pointe",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Remove 2 damage counters from 1 of your Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
