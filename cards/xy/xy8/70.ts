import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-70",
	localId: 70,

	// Card informations
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/70/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/70/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 152,
		type: AbilityType.TALENT,
		name: {
			en: "My Way",
			fr: "Ma Façon",
		},
		text: {
			en: "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
			fr: "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moonlight Gain",
			fr: "Soin au Clair de Lune",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
