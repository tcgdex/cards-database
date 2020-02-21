import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-12",
	localId: 12,

	// Card informations
	name: {
		en: "Virizion",
		fr: "Viridium",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 640,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bail Out",
			fr: "Renflouage",
		},
		text: {
			en: "Put 2 Pokémon from your discard pile into your hand.",
			fr: "Ajoutez 2 Pokémon de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
		},
		text: {
			en: "If you have more Prize cards left than your opponent, this attack does 80 more damage.",
			fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
