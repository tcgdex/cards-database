import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-81",
	localId: 81,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/81/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/81/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/81/high",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Poison Ring",
			fr: "Anneau de Poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Night Slash",
			fr: "Tranche-Nuit",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
