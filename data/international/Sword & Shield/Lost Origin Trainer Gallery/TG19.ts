import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		'en-us': "Gallade V",
		'fr-fr': "Gallame V",
		'es-es': "Gallade V",
		'it-it': "Gallade V",
		'pt-br': "Gallade V",
		'de-de': "Galagladi V"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Rising Sword",
			'fr-fr': "Épée Levée",
			'es-es': "Espada Ascendente",
			'it-it': "Innalzaspada",
			'pt-br': "Espada Ascendente",
			'de-de': "Erhobenes Schwert"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Prize card you have taken.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que hayas cogido.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio che hai preso.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 50 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Buster Swing",
			'fr-fr': "Repoussoir",
			'es-es': "Golpe Destructor",
			'it-it': "Colpaccio",
			'pt-br': "Gingado",
			'de-de': "Widerstandsbrecher"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670831,
				tcgplayer: 284286
			}
		},
	],
}

export default card
