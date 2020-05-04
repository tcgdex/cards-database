import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-34",
	localId: 34,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/34/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/34/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: 353,
		type: AbilityType.TALENT,
		name: {
			en: "Final Wish",
			fr: "Dernier Souhait",
		},
		text: {
			en: "When this Pokémon is Knocked Out by damage from an opponent's attack, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Lorsque ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Seafaring",
			fr: "Voyage en Mer",
		},
		text: {
			en: "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
