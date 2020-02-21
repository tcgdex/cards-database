import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-78",
	localId: 78,

	// Card informations
	name: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/78/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/78/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Link Blast",
			fr: "Explosion en Série",
		},
		text: {
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 70 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d’Énergies attachées, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Luminous Blade",
			fr: "Lame Lumineuse",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
