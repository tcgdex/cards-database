import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		fr: "Aflamanoir",
		en: "Heatmor",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			fr: "Brûle Énergies",
			en: "Energy Burner",
			es: "Combustión de Energía",
			it: "Bruciatore Energetico",
			pt: "Queimador de Energia",
			de: "Energiebrenner"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card