import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-86",
	localId: 86,

	// Card informations
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 560,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/86/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/86/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/86/high",
		},
	},

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Kick Away",
			fr: "Coud'Pied Éjecteur",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Reinforced Headbutt",
			fr: "Coup d’Boule Renforcé",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
