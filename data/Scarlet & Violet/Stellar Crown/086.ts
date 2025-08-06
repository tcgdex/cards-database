import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Diancie",
		fr: "Diancie",
		es: "Diancie",
		it: "Diancie",
		pt: "Diancie",
		de: "Diancie"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Diffuse Reflection",
			fr: "Réflexion Diffuse",
			es: "Refracción Dispersa",
			it: "Riflesso Diffuso",
			pt: "Difusão de Reflexo",
			de: "Streureflektion"
		},

		effect: {
			en: "This attack does 40 damage for each Special Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie spéciale attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño por cada Energía Especial unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 40 danni per ogni Energia speciale assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia Especial ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Spezial-Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
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

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Jiro Sasumo",

	thirdParty: {
		cardmarket: 785940
	}
}

export default card
