import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Charizard GX",
		'fr-fr': "Dracaufeu GX",
		'es-es': "Charizard GX",
		'it-it': "Charizard GX",
		'pt-br': "Charizard GX",
		'de-de': "Glurak GX"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},

			damage: 140,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flare Blitz GX",
				'fr-fr': "Boutefeu GX",
				'es-es': "Envite Ígneo GX",
				'it-it': "Fuococarica GX",
				'pt-br': "Blitz de Labaredas GX",
				'de-de': "Flammenblitz GX"
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "(No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Non puoi usare più di un attacco GX a partita.",
				'pt-br': "(Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
}

export default card
