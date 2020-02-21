import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV40",
	localId: "SV40",

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV40/high",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Dive",
			fr: "Plongeon Rapide",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Royal Blades",
			fr: "Lames Royales",
		},
		text: {
			en: "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
			fr: "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
