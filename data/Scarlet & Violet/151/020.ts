import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [20],
	set: Set,

	name: {
		fr: "Rattatac",
		en: "Raticate",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Double Morsure",
			en: "Second Bite",
			es: "Segundo Mordisco",
			it: "Secondo Morso",
			pt: "Segunda Mordida",
			de: "Zweiter Biss"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			en: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card