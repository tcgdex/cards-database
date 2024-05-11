import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wattrel",
		fr: "Zapétrel",
		es: "Wattrel",
		it: "Wattrel",
		pt: "Wattrel",
		de: "Voltrel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "United Wings",
			fr: "Ailes Unies",
			es: "Alas Unidas",
			it: "Ali Unite",
			pt: "União Alada",
			de: "Vereinte Schwingen"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada.",
			de: "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card