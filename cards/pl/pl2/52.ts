import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Tropius",
		fr: "Tropius Niv. 35",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/52/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/52/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fly",
			fr: "Vol",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Tropius during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tropius lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Blessed Fruit",
			fr: "Fruit béni",
		},
		text: {
			en: "Remove all damage counters from 1 of your Benched Grass Pokémon.",
			fr: "Retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solarbeam",
			fr: "Lance-soleil",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
