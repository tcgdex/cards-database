import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-98",
	localId: 98,

	// Card informations
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 756,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/98/high",
		},
	},

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Strength Sap",
			fr: "Vol-Force",
		},
		text: {
			en: "Heal from this Pokémon 30 damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon 30 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Pulse",
			fr: "Pouls Dodo",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
