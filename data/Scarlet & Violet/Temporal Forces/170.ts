import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mirror Attack",
			fr: "Attaque Miroir",
			es: "Ataque Espejo",
			it: "Attacco Specchio",
			pt: "Golpe Espelhado",
			de: "Spiegelangriff"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Psychic Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Psychic, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Psychic, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Psychic, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Psychic, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Psychic-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card