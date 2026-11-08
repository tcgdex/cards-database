import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Gorebyss",
		'fr-fr': "Rosabyss",
		'de-de': "Saganabyss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [368],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stun Needle",
				'fr-fr': "Para-dard",
				'de-de': "Stun Needle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mystic Water",
				'fr-fr': "Eau mystique",
				'de-de': "Mystic Water"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Psychic Energy in play.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  en jeu.",
				'de-de': "Does 20 damage plus 10 more damage for each  Energy in play."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85842,
				cardmarket: 276092
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 85842,
				cardmarket: 276092
			}
		},
	]
}

export default card
