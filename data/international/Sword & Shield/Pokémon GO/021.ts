import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lively Grouping",
			'fr-fr': "Ensemble Enjoué",
			'es-es': "Reunión Animada",
			'it-it': "Vispo Raduno",
			'pt-br': "Agrupamento Animado",
			'de-de': "Muntere Truppe"
		},

		effect: {
			'en-us': "Search your deck for any number of Magikarp, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck autant de cartes Magicarpe que vous le voulez, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja cualquier cantidad de Magikarp, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un numero qualsiasi di Magikarp, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por qualquer número de Magikarp no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach beliebig vielen Karpador, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Raging Fin",
			'fr-fr': "Nageoire Furieuse",
			'es-es': "Aleta Furiosa",
			'it-it': "Pinna Furiosa",
			'pt-br': "Barbatana Feroz",
			'de-de': "Furiose Flosse"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Magikarp and Gyarados in your discard pile.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Magicarpe et Léviator dans votre pile de défausse.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Magikarp y Gyarados en tu pila de descartes.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Magikarp e Gyarados nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Magikarp e Gyarados na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jedes Karpador und Garados in deinem Ablagestapel 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665252,
				tcgplayer: 276951
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665252,
				tcgplayer: 276951
			}
		},
	],
}

export default card
