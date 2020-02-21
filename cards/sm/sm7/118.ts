import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-118",
	localId: 118,

	// Card informations
	name: {
		en: "Loudred",
		fr: "Ramboum",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 294,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/118/high",
		},
	},

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cracking Voice",
			fr: "Super Voix",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
