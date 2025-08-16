import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [766],
	set: Set,

	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Coordinated Throwing",
			fr: "Lancer Coopération",
			es: "Lanzamiento Coordinado",
			it: "Tiro di Squadra",
			pt: "Arremesso Coordenado",
			de: "Koordiniertes Werfen"
		},

		effect: {
			en: "This attack does 20 damage for each of your Basic Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Básicos en juego.",
			it: "Questo attacco infligge 20 danni per ogni tuo Pokémon Base in gioco.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Básicos em jogo.",
			de: "Diese Attacke fügt für jedes deiner Basis-Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 794442
	}
}

export default card
