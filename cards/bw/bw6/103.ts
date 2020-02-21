import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-103",
	localId: 103,

	// Card informations
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/103/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/103/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/103/high",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 435,
		type: AbilityType.TALENT,
		name: {
			en: "Unobservant",
			fr: "Distrait",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this Pokémon can't attack.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, ce Pokémon ne peut pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Blow",
			fr: "Coup Écrasant",
		},
		text: {
			en: "Discard an Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
