import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Sandy Shocks",
		fr: "Pelage-Sablé",
		es: "Pelarena",
		it: "Peldisabbia",
		pt: "Choque Areia",
		de: "Sandfell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Magnetic Burst",
			fr: "Explosion Aimantée",
			es: "Estallido Magnético",
			it: "Esplosione Magnetica",
			pt: "Ruptura Magnética",
			de: "Magnetischer Ausbruch"
		},

		effect: {
			en: "If you have 3 or more Energy in play, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
			fr: "Si vous avez 3 Énergies ou plus en jeu, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			es: "Si tienes 3 Energías o más en juego, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			it: "Se hai tre o più Energie in gioco, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			pt: "Se você tiver 3 ou mais Energias em jogo, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			de: "Wenn du 3 oder mehr Energien im Spiel hast, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			es: "Joya de Luz",
			it: "Gemmoforza",
			pt: "Gema Poderosa",
			de: "Juwelenkraft"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card