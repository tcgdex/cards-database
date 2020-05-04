import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-59",
	localId: 59,

	// Card informations
	name: {
		en: "Sawk",
		fr: "Karaclée",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 539,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Five Fierce Chops",
			fr: "Volée de Coups",
		},
		text: {
			en: "Flip 5 coins. This attack does 20 damage times the number of heads. This Pokémon can't attack during your next turn.",
			fr: "Lancez 5 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
