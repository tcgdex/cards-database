import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/77/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/77/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/77/high.png",
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
			Type.PSYCHIC
		],
		name: {
			en: "Sleep Pearl",
			fr: "Perle dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Switch Spoink with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Échangez Spoink avec l'un de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

