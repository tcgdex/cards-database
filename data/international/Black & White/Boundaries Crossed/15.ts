import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fluffy Tag",
				'fr-fr': "Accolade Duveteuse",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. During your next turn, the attacks of that Pokémon do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Pendant votre prochain tour, les attaques du Pokémon échangé infligent 40 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-Spore",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They appear along with whirlwinds. They pull pranks, such as moving furniture and leaving balls of cotton in homes.",
	},

	thirdParty: {
		cardmarket: 280602,
		tcgplayer: 90569
	}
}

export default card
