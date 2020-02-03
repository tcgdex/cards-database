import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-185",
	localId: 185,

	// Card informations
	name: {
		en: "Komala",
		fr: "Dodoala",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 775,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/185/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/185/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/185/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/185/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},

	abilities: [{
		id: 1400,
		type: AbilityType.TALENT,
		name: {
			en: "Drowsing",
			fr: "Rêveur",
		},
		text: {
			en: "If this Pokémon remains Asleep between turns, put 6 damage counters on your opponent's Active Pokémon.",
			fr: "Si ce Pokémon reste Endormi entre deux tours, placez 6 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Snooze",
			fr: "Roupillon",
		},
		text: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

