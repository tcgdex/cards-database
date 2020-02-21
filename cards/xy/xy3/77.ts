import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-77",
	localId: 77,

	// Card informations
	name: {
		en: "Noivern",
		fr: "Bruyverne",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 715,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/77/high",
		},
	},

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 764,
		type: AbilityType.TALENT,
		name: {
			en: "Echolocation",
			fr: "Écholocation",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez les dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Boomburst",
			fr: "Bang Sonique",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
