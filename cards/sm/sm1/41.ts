import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Primarina",
		fr: "Oratoria",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 730,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/41/high",
		},
	},

	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sparkling Aria",
			fr: "Aria de l’Écume",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
