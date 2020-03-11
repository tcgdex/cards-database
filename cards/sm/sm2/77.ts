import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Minior",
		fr: "Météno",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 774,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Cosmicsplosion",
			fr: "Explosion Cosmique",
		},
		text: {
			en: "This Pokémon is Knocked Out.",
			fr: "Ce Pokémon est K.O.",
		},
		damage: 190
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
