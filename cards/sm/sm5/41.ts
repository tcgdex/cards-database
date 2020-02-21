import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-41",
	localId: 41,

	// Card informations
	name: {
		en: "Frost Rotom",
		fr: "Motisma Froid",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},

	abilities: [{
		id: 26,
		type: AbilityType.TALENT,
		name: {
			en: "Roto Motor",
			fr: "Moti-Moteur",
		},
		text: {
			en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
			fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Frost Crush",
			fr: "Écrasement Froid",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
