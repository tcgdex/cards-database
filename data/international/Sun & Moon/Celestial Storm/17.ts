import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Volbeat",
		'fr-fr': "Muciole",
		'es-es': "Volbeat",
		'it-it': "Volbeat",
		'pt-br': "Volbeat",
		'de-de': "Volbeat"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		313,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Pheromone Catch",
				'fr-fr': "Prise de Phéromones",
				'es-es': "Captura Feromona",
				'it-it': "Reazione Feromonica",
				'pt-br': "Captador de Feromônio",
				'de-de': "Pheromon-Empfang"
			},
			effect: {
				'en-us': "If your Illumise used Pheromone Signals during your last turn, this attack does 100 more damage.",
				'fr-fr': "Si votre Lumivole a utilisé Signaux de Phéromones pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Si tu Illumise usó Señales Feromona durante tu último turno, este ataque hace 100 puntos de daño más.",
				'it-it': "Se il tuo Illumise ha usato Segnali Feromonici durante il tuo ultimo turno, questo attacco infligge 100 danni in più.",
				'pt-br': "Se seu Illumise usou Sinais de Feromônio durante a sua última vez de jogar, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Wenn dein Illumise während deines letzten Zuges Pheromon-Signale eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives around clean ponds. At night, its rear lights up. It converses with others by flashing its light.",
	},

	thirdParty: {
		cardmarket: 361264,
		tcgplayer: 170827
	}
}

export default card
