import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Okidogi",
		'fr-fr': "Félicanis",
		'es-es': "Okidogi",
		'es-mx': "Okidogi",
		'de-de': "Boninu",
		'it-it': "Okidogi",
		'pt-br': "Okidogi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1014],
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'es-mx': "Puño Ligero",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Settle the Score",
			'fr-fr': "Règlement de Comptes",
			'es-es': "Ajustar Cuentas",
			'es-mx': "Ajuste de Cuentas",
			'de-de': "Rechnung begleichen",
			'it-it': "Saldaconto",
			'pt-br': "Acerto de Contas"
		},

		effect: {
			'en-us': "This attack does 60 more damage for each Prize card your opponent took during their last turn.",
			'fr-fr': "Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée pendant son dernier tour.",
			'es-es': "Este ataque hace 60 puntos de daño más por cada carta de Premio que haya cogido tu rival durante su último turno.",
			'es-mx': "Este ataque hace 60 puntos de daño más por cada carta de Premio que tomó tu rival durante su último turno.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner während seines letzten Zuges genommene Preiskarte 60 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 60 danni in più per ogni carta Premio presa dal tuo avversario durante il suo ultimo turno.",
			'pt-br': "Este ataque causa 60 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou durante o último turno dele."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "Okidogi is a ruffian with a short temper. It can pulverize anything by swinging around the chain on its neck.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869733,
			tcgplayer: 675934
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870328,
			tcgplayer: 676948
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870327,
			tcgplayer: 677088
		}
	},
],
}

export default card
