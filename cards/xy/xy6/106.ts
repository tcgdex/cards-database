import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-106",
	localId: 106,

	// Card informations
	name: {
		en: "Shaymin-EX",
		fr: "Shaymin-EX",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 395,
		type: AbilityType.TALENT,
		name: {
			en: "Set Up",
			fr: "Mise en Place",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Return",
			fr: "Retour Aérien",
		},
		text: {
			en: "Return this Pokémon and all cards attached to it to your hand.",
			fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
