import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-110",
	localId: 110,

	// Card informations
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 508,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/110/high",
		},
	},

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Off",
			fr: "Arrachage",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Barking",
			fr: "Aboiement Sauvage",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
