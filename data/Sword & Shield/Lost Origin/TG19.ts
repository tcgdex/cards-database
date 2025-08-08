import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		en: "Gallade V",
		fr: "Gallame V",
		es: "Gallade V",
		it: "Gallade V",
		pt: "Gallade V",
		de: "Galagladi V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rising Sword",
			fr: "Épée Levée",
			es: "Espada Ascendente",
			it: "Innalzaspada",
			pt: "Espada Ascendente",
			de: "Erhobenes Schwert"
		},

		effect: {
			en: "This attack does 50 more damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que hayas cogido.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Premio che hai preso.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 50 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
			es: "Golpe Destructor",
			it: "Colpaccio",
			pt: "Gingado",
			de: "Widerstandsbrecher"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card