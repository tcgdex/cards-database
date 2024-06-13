import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snack Seek",
			fr: "En Quête de Friandises",
			es: "Búsqueda del Bocadito",
			it: "Cercaspuntino",
			pt: "Caçar Lanches",
			de: "Snacksuche"
		},

		effect: {
			en: "Once during your turn, you may look at the top card of your deck. You may discard that card.",
			fr: "Une fois pendant votre tour, vous pouvez regarder la carte du dessus de votre deck. Vous pouvez défausser cette carte.",
			es: "Una vez durante tu turno, puedes mirar la primera carta de tu baraja. Puedes descartar esa carta.",
			it: "Una sola volta durante il tuo turno, puoi guardare la prima carta del tuo mazzo. Puoi scartare quella carta.",
			pt: "Uma vez durante o seu turno, você poderá olhar a carta de cima do seu baralho. Você pode descartar aquela carta.",
			de: "Einmal während deines Zuges kannst du dir die oberste Karte deines Decks anschauen. Du kannst jene Karte auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Pick and Stick",
			fr: "Choisir et Coller",
			es: "Elige y Pega",
			it: "Prendi e Appiccica",
			pt: "Pegar pra Mim",
			de: "Aufheben und Anheften"
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card