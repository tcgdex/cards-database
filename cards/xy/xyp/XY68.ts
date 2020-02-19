import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY68",
	localId: "XY68",

	// Card informations
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 652,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY68/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY68/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY68/high.png",
		},
	},

	evolveFrom: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Lariat",
			fr: "Lasso à Piques",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Adamantine Press",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

