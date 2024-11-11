import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		pt: "Azelf",
		de: "Tobutz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Neurokinesis",
			fr: "Neurokinésie",
			es: "Neuroquinesis",
			it: "Neurocinèsi",
			pt: "Neurocinese",
			de: "Neurokinese"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui Pokémon del tuo avversario.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card