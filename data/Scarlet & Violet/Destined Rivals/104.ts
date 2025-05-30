import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Graveyard Gamboling",
			fr: "Cabriole Funèbre",
			de: "Grufttollerei",
			it: "Saltellacimitero",
			es: "Jugueteo en el Cementerio",
			pt: "Cambalhotas no Cemitério"
		},

		effect: {
			en: "This attack does 10 damage for each {P} Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque Pokémon {P} dans votre pile de défausse.",
			de: "Diese Attacke fügt für jedes {P}-Pokémon in deinem Ablagestapel 10 Schadenspunkte zu.",
			it: "Questo attacco infligge 10 danni per ogni Pokémon {P} nella tua pila degli scarti.",
			es: "Este ataque hace 10 puntos de daño por cada Pokémon {P} en tu pila de descartes.",
			pt: "Este ataque causa 10 pontos de dano para cada Pokémon {P} na sua pilha de descarte."
		},

		damage: "10×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card