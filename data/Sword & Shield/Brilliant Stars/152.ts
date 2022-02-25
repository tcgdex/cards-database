import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin V",
		fr: "Shaymin V",
		es: "Shaymin V",
		it: "Shaymin V",
		pt: "Shaymin V",
		de: "Shaymin V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Revenge Blast",
			fr: "Explo-Vengeance",
			es: "Estallido Venganza",
			it: "Vendicabomba",
			pt: "Raio de Vingança",
			de: "Rachestoß"
		},

		effect: {
			en: "This attack does 40 more damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 40 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 40 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card