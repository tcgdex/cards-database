import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Keldeo V",
		'fr-fr': "Keldeo V",
		'es-es': "Keldeo V",
		'it-it': "Keldeo V",
		'pt-br': "Keldeo V",
		'de-de': "Keldeo V"
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
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d'Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
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
				'en-us': "Secret Sword",
				'fr-fr': "Lame Ointe",
				'es-es': "Sable Místico",
				'it-it': "Spadamistica",
				'pt-br': "Espada Secreta",
				'de-de': "Mystoschwert"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
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
