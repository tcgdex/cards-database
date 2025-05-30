import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Houndstone",
		fr: "Tomberro",
		de: "Friedwuff",
		it: "Houndstone",
		es: "Houndstone",
		pt: "Houndstone"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Last Respects",
			fr: "Hommage Posthume",
			de: "Letzte Ehre",
			it: "Omaggio ai KO",
			es: "Homenaje Póstumo",
			pt: "Último Adeus"
		},

		effect: {
			en: "This attack does 10 more damage for each {P} Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon {P} dans votre pile de défausse.",
			de: "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon {P} nella tua pila degli scarti.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon {P} en tu pila de descartes.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon {P} na sua pilha de descarte."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card