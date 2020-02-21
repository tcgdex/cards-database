import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-97",
	localId: 97,

	// Card informations
	name: {
		en: "Spearow",
		fr: "Piafabec",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 21,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck Bugs",
			fr: "Picore Insectes",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
