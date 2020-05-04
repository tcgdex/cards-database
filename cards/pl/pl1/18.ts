import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/18/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/18/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/18/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Midnight Eyes",
			fr: "Yeux de minuit",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Perish Song",
			fr: "Requiem",
		},
		text: {
			en: "If the Defending Pokémon is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out.",
			fr: "Si le Pokémon Défenseur est Endormi et que l'attaque Yeux de minuit lui a infligé des dégâts lors de votre tour précédent, il est mis K.O.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Healing Song",
			fr: "Chanson guérisseuse",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
			fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
