import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Okidogi",
		fr: "Félicanis",
		es: "Okidogi",
		'es-mx': "Okidogi",
		de: "Boninu",
		it: "Okidogi",
		pt: "Okidogi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [1014],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			'es-mx': "Puño Ligero",
			de: "Leichter Hieb",
			it: "Pugnetto",
			pt: "Soco de Luz"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Settle the Score",
			fr: "Règlement de Comptes",
			es: "Ajustar Cuentas",
			'es-mx': "Ajuste de Cuentas",
			de: "Rechnung begleichen",
			it: "Saldaconto",
			pt: "Acerto de Contas"
		},

		effect: {
			en: "This attack does 60 more damage for each Prize card your opponent took during their last turn.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée pendant son dernier tour.",
			es: "Este ataque hace 60 puntos de daño más por cada carta de Premio que haya cogido tu rival durante su último turno.",
			'es-mx': "Este ataque hace 60 puntos de daño más por cada carta de Premio que tomó tu rival durante su último turno.",
			de: "Diese Attacke fügt für jede von deinem Gegner während seines letzten Zuges genommene Preiskarte 60 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 60 danni in più per ogni carta Premio presa dal tuo avversario durante il suo ultimo turno.",
			pt: "Este ataque causa 60 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou durante o último turno dele."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675934,
		cardmarket: 869733
	}
}

export default card