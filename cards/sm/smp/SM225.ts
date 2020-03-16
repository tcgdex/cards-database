import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM225",
	localId: "SM225",

	// Card informations
	name: {
		fr: "Victini"
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nagimiso",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			fr: "V de Victoire",
		},
		text: {
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base de diffférents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite cotre deck.",
		},
	}, {
		cost: [
			Type.FIRE
		],
		name: {
			fr: "Flamboiement"
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
