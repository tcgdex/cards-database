import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Raichu GX",
		'fr-fr': "Raichu GX",
		'es-es': "Raichu GX",
		'it-it': "Raichu GX",
		'pt-br': "Raichu GX",
		'de-de': "Raichu GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'es-es': "Rayo",
				'it-it': "Fulmine",
				'pt-br': "Relâmpago",
				'de-de': "Donnerblitz"
			},

			damage: 120,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spark Ball GX",
				'fr-fr': "Boule Étincelles GX",
				'es-es': "Bola Chispa GX",
				'it-it': "Sfera Scintilla GX",
				'pt-br': "Bola de Fagulhas GX",
				'de-de': "Zündball GX"
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "(No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Non puoi usare più di un attacco GX a partita.",
				'pt-br': "(Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,
}

export default card
