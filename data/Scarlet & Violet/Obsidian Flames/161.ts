import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		fr: "Draïeul",
		en: "Drampa",
		es: "Drampa",
		it: "Drampa",
		pt: "Drampa",
		de: "Sen-Long"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Colère",
			en: "Outrage",
			es: "Enfado",
			it: "Oltraggio",
			pt: "Ultraje",
			de: "Wutanfall"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card