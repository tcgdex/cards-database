import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "sowsow",
	category: "Pokemon",

	description: {
		en: "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	},

	stage: "Basic",

	name: {
		en: "Bunnelby",
		fr: "Sapereau",
		de: "Scoppel",
		es: "Bunnelby",
		pt: "Bunnelby",
		it: "Bunnelby"
	},

	rarity: "None",
	dexId: [659],
	hp: 40,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mad Party",
			fr: "Folle Aventure",
			de: "Verrückte Party",
			es: "Merienda de Locos",
			pt: "Festa Maluca",
			it: "Festa di Matti"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card