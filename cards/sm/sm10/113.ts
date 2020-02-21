import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-113",
	localId: 113,

	// Card informations
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 551,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 111,
		type: AbilityType.TALENT,
		name: {
			en: "Intimidating Fang",
			fr: "Croc Intimidant",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
