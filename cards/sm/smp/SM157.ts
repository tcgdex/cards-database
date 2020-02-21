import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM157",
	localId: "SM157",

	// Card informations
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM157/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM157/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM157/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

	abilities: [{
		id: 619,
		type: AbilityType.TALENT,
		name: {
			en: "Pika Shield",
			fr: "Pika Bouclier",
		},
		text: {
			en: "This Pokémon can't be Paralyzed.",
			fr: "Ce Pokémon ne peut pas être Paralysé.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
