import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-140",
	localId: 140,

	// Card informations
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 482,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/140/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/140/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/140/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 427,
		type: AbilityType.POKEBODY,
		name: {
			en: "Psychic Aura",
			fr: "Aura psy",
		},
		text: {
			en: "Each of your Psychic Pokémon has no Weakness.",
			fr: "Chacun de vos Pokémon Psychic ne possède pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Deep Balance",
			fr: "Bon équilibre",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Put 1 damage counter on that Pokémon for each Energy attached to all of your opponent's Pokémon.",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Placez 1 marqueur de dégât sur ce Pokémon pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
