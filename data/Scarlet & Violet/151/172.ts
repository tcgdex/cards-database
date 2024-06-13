import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		fr: "Chenipan",
		en: "Caterpie",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Mange-Feuille",
			en: "Leaf Munch",
			es: "Mascahojas",
			it: "Mangifoglia",
			pt: "Mastigar Folhas",
			de: "Laubmampfer"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 30 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 30 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Grass, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Grass, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Grass, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Grass-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card