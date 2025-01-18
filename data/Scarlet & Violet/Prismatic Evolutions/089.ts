import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		pt: "Hawlucha",
		it: "Hawlucha",
		de: "Resladero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rising Tackle",
			fr: "Tacle Montant",
			es: "Placaje Ascendente",
			pt: "Investida Crescente",
			it: "Azione Ascendente",
			de: "Vorschnellender Tackle"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 50 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 50 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 50 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card