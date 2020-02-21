import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-89",
	localId: 89,

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 227,
		type: AbilityType.TALENT,
		name: {
			en: "Rough Skin",
			fr: "Peau Dure",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	}],





	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
