import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Settle the Score",
				'fr-fr': "Règlement de Comptes",
				'es-es': "Ajustar Cuentas",
				'it-it': "Saldaconto",
				'pt-br': "Acerto de Contas",
				'de-de': "Rechnung begleichen"
			},
			effect: {
				'en-us': "This attack does 80 more damage for each Prize card your opponent took on their last turn.",
				'fr-fr': "Cette attaque inflige 80 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée lors de son dernier tour.",
				'es-es': "Este ataque hace 80 puntos de daño más por cada carta de Premio que haya cogido tu rival en su último turno.",
				'it-it': "Questo attacco infligge 80 danni in più per ogni carta Premio presa dal tuo avversario nel suo ultimo turno.",
				'pt-br': "Este ataque causa 80 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou na última vez dele(a) jogar.",
				'de-de': "Diese Attacke fügt 80 Schadenspunkte mehr mal der Anzahl der Preiskarten zu, die dein Gegner während seines letzten Zuges genommen hat."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Submission",
				'fr-fr': "Sacrifice",
				'es-es': "Sumisión",
				'it-it': "Sottomissione",
				'pt-br': "Submissão",
				'de-de': "Überroller"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It unleashes megaton-level punches that send opponents flying clear over the horizon.",
	},

	thirdParty: {
		cardmarket: 297526,
		tcgplayer: 130975
	}
}

export default card
