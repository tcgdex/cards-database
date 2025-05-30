import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		de: "Dedenne",
		it: "Dedenne",
		es: "Dedenne",
		pt: "Dedenne"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Second Bite",
			fr: "Double Morsure",
			de: "Zweiter Biss",
			it: "Secondo Morso",
			es: "Segundo Mordisco",
			pt: "Segunda Mordida"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card