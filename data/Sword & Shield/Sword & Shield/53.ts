import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Keldeo V",
		fr: "Keldeo V",
		es: "Keldeo V",
		it: "Keldeo V",
		pt: "Keldeo V",
		de: "Keldeo V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 210,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d'Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Secret Sword",
				fr: "Lame Ointe",
				es: "Sable Místico",
				it: "Spadamistica",
				pt: "Espada Secreta",
				de: "Mystoschwert"
			},
			effect: {
				en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	suffix: "V",

	thirdParty: {
		cardmarket: 427211,
		tcgplayer: 206046
	}
}

export default card
