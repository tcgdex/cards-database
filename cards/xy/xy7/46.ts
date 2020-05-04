import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy7/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/46/high",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
