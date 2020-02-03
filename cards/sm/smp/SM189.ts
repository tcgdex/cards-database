import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM189",
	localId: "SM189",

	// Card informations
	name: {
		fr: "Tortank-GX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM189/low.png",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM189/high.png",
		},
	},

	evolveFrom: {
		fr: "Carabaffe",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			fr: "Coquille Dure",
		},
		text: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			fr: "Canon Éclaboussant",
		},
		text: {
			fr: "Mélangez autant d’Énergies Water que vous le voulez de vos Pokémon avec votre deck. Cette attaque inflige 60 dégâts pour chaque carte mélangée avec votre deck de cette façon.",
		},
		damage: "60×"
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Geyser Géant-GX",
		},
		text: {
			fr: "Attachez autant de cartes Énergie Water que vous le voulez de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card

