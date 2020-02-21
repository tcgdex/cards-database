import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-51",
	localId: 51,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/51/high",
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
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 774,
		type: AbilityType.TALENT,
		name: {
			en: "Max Wind",
			fr: "Vent Max",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal all damage from 1 of your Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez soigner tous les dégâts de l'un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mach Press",
			fr: "Mach Press",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
