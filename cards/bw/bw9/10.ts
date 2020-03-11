import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-10",
	localId: 10,

	// Card informations
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/10/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/10/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/10/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Rapid-Fire Needles",
			fr: "Salve d'Aiguilles",
		},
		text: {
			en: "Does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Payback",
			fr: "Représailles",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 60 more damage and discard an Energy attached to the Defending Pokémon.",
			fr: "S'il ne reste qu'une seule carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires et vous défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
