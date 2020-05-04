import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/6/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/6/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/6/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 884,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Flame",
			fr: "Flamme évolutive",
		},
		text: {
			en: "Once during your turn, when you play Magmortar from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Maganon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Arrow",
			fr: "Flèche de feu",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Ball",
			fr: "Boule de feu",
		},
		text: {
			en: "You may move a Fire Energy card attached to Magmortar to 1 of your Benched Pokémon.",
			fr: "Vous pouvez déplacer une carte Énergie Fire attachée à Maganon sur 1 de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
