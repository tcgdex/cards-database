import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-30",
	localId: 30,

	// Card informations
	name: {
		en: "Phione",
		fr: "Phione",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 489,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/30/high",
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
		id: 1193,
		type: AbilityType.TALENT,
		name: {
			en: "Murmurs of the Sea",
			fr: "Murmures Marins",
		},
		text: {
			en: "Your Water Pokémon can't be Confused. If those Pokémon are already Confused, remove that Special Condition.",
			fr: "Vos Pokémon Water ne peuvent pas être Confus. Si ces Pokémon sont déjà Confus, retirez cet État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
