import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Houndstone",
		fr: "Tomberro",
		es: "Houndstone",
		it: "Houndstone",
		pt: "Houndstone"
	},

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
			es: "Homenaje Póstumo",
			it: "Omaggio ai KO",
			pt: "Último Adeus"
		},

		effect: {
			en: "This attack does 10 more damage for each Psychic Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon Psychic dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño más por cada Pokémon Psychic en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon Psychic nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada Pokémon Psychic na sua pilha de descarte."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card