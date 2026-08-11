import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Laid-Back",
				'fr-fr': "Tranquillou",
				'es-es': "Despreocupación",
				'it-it': "Rilassato",
				'pt-br': "Relaxado",
				'de-de': "Entspannt"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño hecho a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud Gun",
				'fr-fr': "Giclée de Boue",
			},
			effect: {
				'en-us': "If this Pokémon has any Fighting Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l'Énergie Fighting est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has an easygoing nature. It doesn't care if it bumps its head on boats and boulders while swimming.",
	},

	thirdParty: {
		cardmarket: 280900,
		tcgplayer: 88474
	}
}

export default card
