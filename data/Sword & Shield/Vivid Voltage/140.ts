import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Togekiss V",
		fr: "Togekiss V",
		es: "Togekiss V",
		it: "Togekiss V",
		pt: "Togekiss V",
		de: "Togekiss V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
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
				en: "White Wind",
				fr: "Vent Blanc",
				es: "Viento Blanco",
				it: "Vento Bianco",
				pt: "Vento Branco",
				de: "Weißer Wind"
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
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
				en: "Speed Wing",
				fr: "Ailes Vives",
				es: "Ala Veloz",
				it: "Alaveloce",
				pt: "Asa da Velocidade",
				de: "Turboschwinge"
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 512410
	}
}

export default card
