import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 42,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/31/high",
		},
	},

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},

	abilities: [{
		id: 767,
		type: AbilityType.TALENT,
		name: {
			en: "Sneaky Bite",
			fr: "Morsure Sournoise",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swoop Across",
			fr: "Déferlement Aérien",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
