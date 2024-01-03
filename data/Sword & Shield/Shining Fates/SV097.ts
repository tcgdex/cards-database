import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sapereau",
		en: "Bunnelby",
		es: "Bunnelby",
		it: "Bunnelby",
		pt: "Bunnelby",
		de: "Scoppel"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Folle Aventure",
			en: "Mad Party",
			es: "Merienda de Locos",
			it: "Festa di Matti",
			pt: "Festa Maluca",
			de: "Verrückte Party"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	}
}

export default card
