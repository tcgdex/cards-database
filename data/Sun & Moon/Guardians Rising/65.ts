import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
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
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Settle the Score",
				fr: "Règlement de Comptes",
				es: "Ajustar Cuentas",
				it: "Saldaconto",
				pt: "Acerto de Contas",
				de: "Rechnung begleichen"
			},
			effect: {
				en: "This attack does 80 more damage for each Prize card your opponent took on their last turn.",
				fr: "Cette attaque inflige 80 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée lors de son dernier tour.",
				es: "Este ataque hace 80 puntos de daño más por cada carta de Premio que haya cogido tu rival en su último turno.",
				it: "Questo attacco infligge 80 danni in più per ogni carta Premio presa dal tuo avversario nel suo ultimo turno.",
				pt: "Este ataque causa 80 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou na última vez dele(a) jogar.",
				de: "Diese Attacke fügt 80 Schadenspunkte mehr mal der Anzahl der Preiskarten zu, die dein Gegner während seines letzten Zuges genommen hat."
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
				en: "Submission",
				fr: "Sacrifice",
				es: "Sumisión",
				it: "Sottomissione",
				pt: "Submissão",
				de: "Überroller"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 297526
	}
}

export default card
