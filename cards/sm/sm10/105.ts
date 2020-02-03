import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-105",
	localId: 105,

	// Card informations
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 740,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/105/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/105/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/105/high.png",
		},
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fight Alone",
			fr: "Combat Solitaire",
		},
		text: {
			en: "If you have fewer Pokémon in play than your opponent, this attack does 50 more damage for each Pokémon fewer you have in play.",
			fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

