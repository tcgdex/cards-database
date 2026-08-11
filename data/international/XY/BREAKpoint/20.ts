import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Careless Head",
				'fr-fr': "Tête Imprudente",
				'es-es': "Cabeza Despistada",
				'it-it': "Testa Sbadata",
				'pt-br': "Cabeça Descuidada",
				'de-de': "Sorgloser Kopf"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 50 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Walk-Off Homer",
				'fr-fr': "But Vainqueur",
				'es-es': "Paseo Final",
				'it-it': "Punto Partita",
				'pt-br': "Gol de Ouro",
				'de-de': "Entscheidender Treffer"
			},
			effect: {
				'en-us': "If you use this attack when you have only 1 Prize card left, you win this game.",
				'fr-fr': "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
				'es-es': "Si usas este ataque cuando te queda solo 1 carta de Premio, ganas esta partida.",
				'it-it': "Se usi questo attacco quando ti è rimasta una sola carta Premio, vinci la partita.",
				'pt-br': "Se você usar este ataque quando tiver apenas 1 card de Prêmio restante, você vencerá este jogo.",
				'de-de': "Wenn du nur 1 Preiskarte übrig hast und mit dieser Attacke angreifst, gewinnst du dieses Spiel."
			},

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
		'en-us': "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
	},

	thirdParty: {
		cardmarket: 288195,
		tcgplayer: 111523
	}
}

export default card
