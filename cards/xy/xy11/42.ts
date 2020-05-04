import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-42",
	localId: 42,

	// Card informations
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
		Type.GRASS,
	],

	dexId: 596,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/42/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/42/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/42/high",
		},
	},

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Thread",
			fr: "Double Fil",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electroweb",
			fr: "Toile Élek",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
