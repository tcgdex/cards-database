import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/11/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/11/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/11/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Helping Hand",
			fr: "Coup d'Main",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
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



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
