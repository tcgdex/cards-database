import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-76",
	localId: 76,

	// Card informations
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/76/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/76/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Draft",
			fr: "Souffle Supersonique",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 120
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
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

