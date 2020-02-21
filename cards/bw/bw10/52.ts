import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-52",
	localId: 52,

	// Card informations
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 539,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/52/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/52/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Kick of Righteousness",
			fr: "Coup de Pied Vertueux",
		},
		text: {
			en: "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Low Sweep",
			fr: "Balayette",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
