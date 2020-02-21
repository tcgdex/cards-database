import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-18",
	localId: 18,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/18/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/18/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/18/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'énergie",
		},
		text: {
			en: "Move an Energy card attached to Lanturn to 1 of your Benched Pokémon.",
			fr: "Prenez une carte Énergie attachée à Lanturn et attachez-la à l'un des Pokémon de votre Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
