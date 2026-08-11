import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'es-es': "Vaporeon",
		'it-it': "Vaporeon",
		'pt-br': "Vaporeon",
		'de-de': "Aquana"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Refreshing Rain",
				'fr-fr': "Ondée Rafraîchissante",
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Gold Breaker",
				'fr-fr': "Goliastruction",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its cell composition is similar to water molecules. As a result, it can't be seen when it melts away into water.",
	},

	thirdParty: {
		cardmarket: 280898,
		tcgplayer: 90291
	}
}

export default card
