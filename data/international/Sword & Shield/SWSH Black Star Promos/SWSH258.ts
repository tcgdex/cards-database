import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		'fr-fr': "Gallame V",
		'de-de': "Galagladi V",
		'es-es': "Gallade V",
		'pt-br': "Gallade V",
		'it-it': "Gallade V",
		'en-us': "Gallade V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Épée Levée",
			'de-de': "Erhobenes Schwert",
			'es-es': "Espada Ascendente",
			'pt-br': "Espada Ascendente",
			'it-it': "Innalzaspada",
			'en-us': "Rising Sword"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 50 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que hayas cogido.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio che hai preso.",
			'en-us': "This attack does 50 more damage for each Prize card you have taken."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Repoussoir",
			'de-de': "Widerstandsbrecher",
			'es-es': "Golpe Destructor",
			'pt-br': "Gingado",
			'it-it': "Colpaccio",
			'en-us': "Buster Swing"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'en-us': "This attack's damage isn't affected by Resistance."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 674374
	}
}

export default card
