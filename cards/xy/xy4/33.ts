import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/33/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 592,
		type: AbilityType.TALENT,
		name: {
			en: "Surprise Bite",
			fr: "Morsure Surprise",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 3 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer 3 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
