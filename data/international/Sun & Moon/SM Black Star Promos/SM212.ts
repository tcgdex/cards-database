import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gyarados GX",
		'fr-fr': "Léviator GX",
		'es-es': "Gyarados GX",
		'it-it': "Gyarados GX",
		'pt-br': "Gyarados GX",
		'de-de': "Garados GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-Rage",
				'es-es': "Furia Dragón",
				'it-it': "Ira di Drago",
				'pt-br': "Ira do Dragão",
				'de-de': "Drachenwut"
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam GX",
				'fr-fr': "Ultralaser GX",
				'es-es': "Hiperrayo GX",
				'it-it': "Iper Raggio GX",
				'pt-br': "Hiper-raio GX",
				'de-de': "Hyperstrahl GX"
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "(No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Non puoi usare più di un attacco GX a partita.",
				'pt-br': "(Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
}

export default card
