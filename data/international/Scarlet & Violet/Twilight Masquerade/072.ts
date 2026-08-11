import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snack Seek",
			'fr-fr': "En Quête de Friandises",
			'es-es': "Búsqueda del Bocadito",
			'it-it': "Cercaspuntino",
			'pt-br': "Caçar Lanches",
			'de-de': "Snacksuche"
		},

		effect: {
			'en-us': "Once during your turn, you may look at the top card of your deck. You may discard that card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder la carte du dessus de votre deck. Vous pouvez défausser cette carte.",
			'es-es': "Una vez durante tu turno, puedes mirar la primera carta de tu baraja. Puedes descartar esa carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare la prima carta del tuo mazzo. Puoi scartare quella carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar a carta de cima do seu baralho. Você pode descartar aquela carta.",
			'de-de': "Einmal während deines Zuges kannst du dir die oberste Karte deines Decks anschauen. Du kannst jene Karte auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Pick and Stick",
			'fr-fr': "Choisir et Coller",
			'es-es': "Elige y Pega",
			'it-it': "Prendi e Appiccica",
			'pt-br': "Pegar pra Mim",
			'de-de': "Aufheben und Anheften"
		},

		effect: {
			'en-us': "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It has a small stomach. If it isn't constantly eating the seeds it keeps in its pockets, it will get hungry immediately.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769246,
				tcgplayer: 550116
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769246,
				tcgplayer: 550116
			}
		},
	],

	illustrator: "kodama",

}

export default card