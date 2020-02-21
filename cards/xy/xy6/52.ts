import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-52",
	localId: 52,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/52/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Plus Δ",
		},
		text: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Wrapped in Wind",
			fr: "Enveloppement Éolien",
		},
		text: {
			en: "Attach up to 2 basic Energy cards from your hand to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre main à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
