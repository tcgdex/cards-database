import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/32/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Split Spiral Punch",
			fr: "Coup d’Poing en Demi Spirale",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wake-Up Slap",
			fr: "Réveil Forcé",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 80 dégâts supplémentaires. Retirez ensuite tous les États Spéciaux de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
