import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-31",
	localId: 31,

	// Card informations
	name: {
		en: "Mewtwo-GX",
		fr: "Mewtwo-GX",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
		},
		damage: 110
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psycrush-GX",
			fr: "Écrasement Psy-GX",
		},
		text: {
			en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
