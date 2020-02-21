import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-10",
	localId: 10,

	// Card informations
	name: {
		en: "Lileep",
		fr: "Lilia",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/10/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
