import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lively Grouping",
			fr: "Ensemble Enjoué",
			es: "Reunión Animada",
			it: "Vispo Raduno",
			pt: "Agrupamento Animado",
			de: "Muntere Truppe"
		},

		effect: {
			en: "Search your deck for any number of Magikarp, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck autant de cartes Magicarpe que vous le voulez, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja cualquier cantidad de Magikarp, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un numero qualsiasi di Magikarp, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por qualquer número de Magikarp no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach beliebig vielen Karpador, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Raging Fin",
			fr: "Nageoire Furieuse",
			es: "Aleta Furiosa",
			it: "Pinna Furiosa",
			pt: "Barbatana Feroz",
			de: "Furiose Flosse"
		},

		effect: {
			en: "This attack does 30 more damage for each Magikarp and Gyarados in your discard pile.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Magicarpe et Léviator dans votre pile de défausse.",
			es: "Este ataque hace 30 puntos de daño más por cada Magikarp y Gyarados en tu pila de descartes.",
			it: "Questo attacco infligge 30 danni in più per ogni Magikarp e Gyarados nella tua pila degli scarti.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Magikarp e Gyarados na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes Karpador und Garados in deinem Ablagestapel 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664560,
		tcgplayer: 276951
	}
}

export default card