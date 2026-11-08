import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'de-de': "Kindwurm"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'es-es': "Exosqueleto",
				'it-it': "Esoscheletro",
				'pt-br': "Exo-esqueleto",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Cualquier daño infligido a este Pokémon por ataques se reduce en 10 (después de aplicar Debilidad y Resistencia).",
				'it-it': "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 10, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Qualquer dano causado a este Pokémon por ataques será reduzido em 10 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its armored body makes all attacks bounce off. The armor is too tough, however, making it heavy and somewhat sluggish.",
	},

	thirdParty: {
		cardmarket: 282724,
		tcgplayer: 98092
	}
}

export default card
