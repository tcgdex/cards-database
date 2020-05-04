import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-22",
	localId: 22,

	// Card informations
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/22/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/22/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/22/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bebop Punch",
			fr: "Rythmofrappe",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Flip a coin until you get tails. This attack does 50 damage times the number of heads to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Lancez une pièce jusqu'à ce qu'elle tombe sur pile. Cette attaque inflige à ce Pokémon 50 dégâts multipliés par le nombre de côtés face. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
