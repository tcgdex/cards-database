import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'de-de': "Psiana"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [196],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Crush",
				'fr-fr': "Écras'énergie",
				'de-de': "Energy Crush"
			},
			effect: {
				'en-us': "Does 20 more damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée aux Pokémon de votre adversaire.",
				'de-de': "Does 20 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 85319
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275793,
				tcgplayer: 85319
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125145
			}
		},
	],

}

export default card
