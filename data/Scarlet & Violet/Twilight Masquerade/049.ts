import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Flail",
			fr: "Gigotage",
			es: "Azote",
			it: "Flagello",
			pt: "Mangual",
			de: "Dreschflegel"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card