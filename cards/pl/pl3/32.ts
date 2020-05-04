import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-32",
	localId: 32,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Seleroc",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/32/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/32/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 1114,
		type: AbilityType.POKEBODY,
		name: {
			en: "Marvel Eyes",
			fr: "Yeux merveilleux",
		},
		text: {
			en: "If you have Solrock in play, prevent all effects of attacks, including damage, done to any of your Lunatone or Solrock by your opponent's Pokémon LV.X.",
			fr: "Si vous avez Solaroc en jeu, prévenez tous les effets d'attaques, dégâts inclus, infligés à vos Seleroc ou Solaroc par les Pokémon NIV.X de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Gravity Wave",
			fr: "Vague pesante",
		},
		text: {
			en: "Does 30 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire qui ne possède pas de Coût de retraite. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
