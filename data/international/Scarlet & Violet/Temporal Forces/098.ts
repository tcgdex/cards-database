import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [989],
	set: Set,

	name: {
		'en-us': "Sandy Shocks",
		'fr-fr': "Pelage-Sablé",
		'es-es': "Pelarena",
		'it-it': "Peldisabbia",
		'pt-br': "Choque Areia",
		'de-de': "Sandfell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Magnetic Burst",
			'fr-fr': "Explosion Aimantée",
			'es-es': "Estallido Magnético",
			'it-it': "Esplosione Magnetica",
			'pt-br': "Ruptura Magnética",
			'de-de': "Magnetischer Ausbruch"
		},

		effect: {
			'en-us': "If you have 3 or more Energy in play, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
			'fr-fr': "Si vous avez 3 Énergies ou plus en jeu, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "Si tienes 3 Energías o más en juego, este ataque hace 70 puntos de daño más. El daño de este ataque no se ve afectado por Debilidad.",
			'it-it': "Se hai tre o più Energie in gioco, questo attacco infligge 70 danni in più. I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "Se você tiver 3 ou mais Energias em jogo, este ataque causará 70 pontos de dano a mais. O dano deste ataque não é afetado por Fraqueza.",
			'de-de': "Wenn du 3 oder mehr Energien im Spiel hast, fügt diese Attacke 70 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "No records exist of this Pokémon being caught. Data is lacking, but the Pokémon's traits match up with a creature shown in an expedition journal.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760728,
				tcgplayer: 542842
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760728,
				tcgplayer: 542842
			}
		},
	],

	illustrator: "DOM",

}

export default card