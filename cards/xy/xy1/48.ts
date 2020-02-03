import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Arbok",
		fr: "Arbok",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/48/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/48/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/48/high.png",
		},
	},

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gastro Acid",
			fr: "Suc Digestif",
		},
		text: {
			en: "The Defending Pokémon has no Abilities until the end of your next turn.",
			fr: "Le Pokémon Défenseur n'a pas de talent jusqu'à la fin de votre prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

