import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Registeel ex",
		'fr-fr': "Registeel ex",
		'de-de': "Registeel ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		379,
	],

	hp: 90,

	types: [
		"Metal",
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Block Signal",
				'fr-fr': "Signal lumineux",
				'de-de': "Block Signal"
			},
			effect: {
				'en-us': "If Regice ex is in play, flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Si Regice ex est en jeu, lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If Regice ex is in play, flip a coin. If heads the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Wide Laser",
				'fr-fr': "Laser de grande envergure",
				'de-de': "Wide Laser"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 88680,
		cardmarket: 276611
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88680,
				cardmarket: 276611
			},
		},
	],
}

export default card
