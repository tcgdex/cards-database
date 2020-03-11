import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 331,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/67/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/67/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sneaky Attack",
			fr: "Coup Bas",
		},
		text: {
			en: "If Cacnea has any Darkness Energy attached to it, this attack does 10 damage plus 10 more damage.",
			fr: "Si Cacnea possède de l'Énergie Darkness, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Shoot Needle",
			fr: "Coup de dard",
		},
		text: {
			en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)",
			fr: "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) (Vous pouvez choisir le même Pokémon plus d'une fois mais vous ne pouvez pas lui infliger plus de 10 dégâts de cette façon).",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
