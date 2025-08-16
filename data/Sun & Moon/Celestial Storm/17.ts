import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		es: "Volbeat",
		it: "Volbeat",
		pt: "Volbeat",
		de: "Volbeat"
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
				en: "Pheromone Catch",
				fr: "Prise de Phéromones",
				es: "Captura Feromona",
				it: "Reazione Feromonica",
				pt: "Captador de Feromônio",
				de: "Pheromon-Empfang"
			},
			effect: {
				en: "If your Illumise used Pheromone Signals during your last turn, this attack does 100 more damage.",
				fr: "Si votre Lumivole a utilisé Signaux de Phéromones pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si tu Illumise usó Señales Feromona durante tu último turno, este ataque hace 100 puntos de daño más.",
				it: "Se il tuo Illumise ha usato Segnali Feromonici durante il tuo ultimo turno, questo attacco infligge 100 danni in più.",
				pt: "Se seu Illumise usou Sinais de Feromônio durante a sua última vez de jogar, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn dein Illumise während deines letzten Zuges Pheromon-Signale eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 361264,
		tcgplayer: 170827
	}
}

export default card
