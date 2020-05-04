import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 567,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/67/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/67/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/67/high",
		},
	},

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 452,
		type: AbilityType.TALENT,
		name: {
			en: "Ancient Power",
			fr: "Pouv.Antique",
		},
		text: {
			en: "Each player can't play any Pokémon from his or her hand to evolve his or her Pokémon.",
			fr: "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
			fr: "Éboulement",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
