import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		it: "Slowbro",
		pt: "Slowbro",
		de: "Lahmus"
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
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Careless Head",
				fr: "Tête Imprudente",
				es: "Cabeza Despistada",
				it: "Testa Sbadata",
				pt: "Cabeça Descuidada",
				de: "Sorgloser Kopf"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 50 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 weitere Schadenspunkte zu."
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
				en: "Walk-Off Homer",
				fr: "But Vainqueur",
				es: "Paseo Final",
				it: "Punto Partita",
				pt: "Gol de Ouro",
				de: "Entscheidender Treffer"
			},
			effect: {
				en: "If you use this attack when you have only 1 Prize card left, you win this game.",
				fr: "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
				es: "Si usas este ataque cuando te queda solo 1 carta de Premio, ganas esta partida.",
				it: "Se usi questo attacco quando ti è rimasta una sola carta Premio, vinci la partita.",
				pt: "Se você usar este ataque quando tiver apenas 1 card de Prêmio restante, você vencerá este jogo.",
				de: "Wenn du nur 1 Preiskarte übrig hast und mit dieser Attacke angreifst, gewinnst du dieses Spiel."
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

	thirdParty: {
		cardmarket: 288195,
		tcgplayer: 111523
	}
}

export default card
