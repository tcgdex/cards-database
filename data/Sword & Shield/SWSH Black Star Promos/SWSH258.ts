import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		fr: "Gallame V",
		de: "Galagladi V",
		es: "Gallade V",
		pt: "Gallade V",
		it: "Gallade V",
		en: "Gallade V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Épée Levée",
			de: "Erhobenes Schwert",
			es: "Espada Ascendente",
			pt: "Espada Ascendente",
			it: "Innalzaspada",
			en: "Rising Sword"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 50 Schadenspunkte mehr zu.",
			es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que hayas cogido.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			it: "Questo attacco infligge 50 danni in più per ogni carta Premio che hai preso.",
			en: "This attack does 50 more damage for each Prize card you have taken."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Repoussoir",
			de: "Widerstandsbrecher",
			es: "Golpe Destructor",
			pt: "Gingado",
			it: "Colpaccio",
			en: "Buster Swing"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			en: "This attack's damage isn't affected by Resistance."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card