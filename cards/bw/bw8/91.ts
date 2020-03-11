import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-91",
	localId: 91,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 632,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hard Crunch",
			fr: "Mâchouil'Dur",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
