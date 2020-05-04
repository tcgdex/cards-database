import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/8/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/8/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/8/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 207,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psychic Connect",
			fr: "Connection psy",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Burst",
			fr: "Explosion d'énergie",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Gardevoir et au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Protection",
			fr: "Protection psy",
		},
		text: {
			en: "Gardevoir has no Weakness during your opponent's next turn.",
			fr: "Gardevoir ne possède pas de Faiblesse lors du prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
