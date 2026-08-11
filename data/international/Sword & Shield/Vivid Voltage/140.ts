import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Togekiss V",
		'fr-fr': "Togekiss V",
		'es-es': "Togekiss V",
		'it-it': "Togekiss V",
		'pt-br': "Togekiss V",
		'de-de': "Togekiss V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [468],
	set: Set,
	hp: 200,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "White Wind",
				'fr-fr': "Vent Blanc",
				'es-es': "Viento Blanco",
				'it-it': "Vento Bianco",
				'pt-br': "Vento Branco",
				'de-de': "Weißer Wind"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 70 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Wing",
				'fr-fr': "Ailes Vives",
				'es-es': "Ala Veloz",
				'it-it': "Alaveloce",
				'pt-br': "Asa da Velocidade",
				'de-de': "Turboschwinge"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512410,
				tcgplayer: 226596
			}
		},
	],
}

export default card
