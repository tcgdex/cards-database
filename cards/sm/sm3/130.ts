import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-130",
	localId: 130,

	// Card informations
	name: {
		en: "Tapu Bulu-GX",
		fr: "Tokotoro-GX",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	dexId: 787,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/130/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/130/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/130/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Nature's Judgment",
			fr: "Jugement de la Nature",
		},
		text: {
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 120
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tapu Wilderness-GX",
			fr: "Toko Nature-GX",
		},
		text: {
			en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],





	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

