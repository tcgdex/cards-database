import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-46",
	localId: 46,

	// Card informations
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/46/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/46/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/46/high.png",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
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
			Type.COLORLESS
		],
		name: {
			en: "Entangling Control",
			fr: "Contrôle Emmêlant",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon is now Confused.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Trash Tentacle",
			fr: "Tentacule Déchet",
		},
		text: {
			en: "Put a card from your discard pile into your hand.",
			fr: "Ajoutez une carte de votre pile de défausse à votre main.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

