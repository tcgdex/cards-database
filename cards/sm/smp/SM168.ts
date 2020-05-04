import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM168",
	localId: "SM168",

	// Card informations
	name: {
		fr: "Pikachu et Zekrom-GX",
	},

	hp: 240,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM168/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "kawayoo",



	attacks: [{
		name: {
			fr: "Règle des ESCOUADES",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			fr: "Attaque Absolue",
		},
		text: {
			fr: "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 150
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			fr: "Escouade Foudroyante-GX",
		},
		text: {
			fr: "Si au moins 3 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card
