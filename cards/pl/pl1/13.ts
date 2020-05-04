import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Rampardos",
		fr: "Charkos",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 409,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/13/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/13/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/13/high",
		},
	},

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 626,
		type: AbilityType.POKEBODY,
		name: {
			en: "Iron Skull",
			fr: "Crâne de fer",
		},
		text: {
			en: "Rampardos's attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de l'attaque de Charkos ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Head Smash",
			fr: "Fracass'Tête",
		},
		text: {
			en: "If the Defending Pokémon would be Knocked Out by this attack, Rampardos does 40 damage to itself.",
			fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, Charkos s'inflige 40 dégâts.",
		},
		damage: 80
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mold Breaker",
			fr: "Brise Moule",
		},
		text: {
			en: "Any damage done to Rampardos by attacks is reduced by 20 (after applying Weakness and Resistance) until the end of your next turn.",
			fr: "Tous dégâts infligés à Charkos par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance) jusqu'à la fin de votre prochain tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
