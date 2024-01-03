import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Egg Incubator",
		fr: "Incubateur d'Œufs",
		es: "Incubadora",
		it: "Incubatrice Uova",
		pt: "Incubadora de Ovo",
		de: "Ei-Brutmaschine"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Flip a coin. If heads, search your deck for a Basic Pokémon, put it onto your Bench, and shuffle your deck. If tails, put this Egg Incubator on the bottom of your deck instead of in the discard pile.",
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base, placez-le sur votre Banc, puis mélangez votre deck. Si c'est pile, placez cette carte Incubateur d'Œufs en dessous de votre deck plutôt que dans votre pile de défausse.",
		es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon Básico, ponlo en tu Banca y baraja las cartas de tu baraja. Si sale cruz, pon esta Incubadora en la parte inferior de tu baraja en vez de en la pila de descartes.",
		it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon Base, mettilo nella tua panchina e rimischia le carte del tuo mazzo. Se esce croce, metti questa Incubatrice Uova in fondo al tuo mazzo invece che nella pila degli scarti.",
		pt: "Jogue 1 moeda. Se sair cara, procure por 1 Pokémon Básico no seu baralho, coloque-o no seu Banco e embaralhe o seu baralho. Se sair coroa, coloque esta Incubadora de Ovo como a carta de baixo do seu baralho ao invés da pilha de descarte.",
		de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Basis-Pokémon, lege es auf deine Bank und mische dein Deck. Lege bei Zahl diese Ei-Brutmaschine unter dein Deck, anstatt sie auf deinen Ablagestapel zu legen."
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card