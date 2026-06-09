import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Sacred Ash",
		fr: "Cendre Sacrée",
		es: "Ceniza Sagrada",
		'es-mx': "Ceniza Sagrada",
		de: "Zauberasche",
		it: "Cenere magica",
		pt: "Cinza Sagrada"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle up to 5 Pokémon from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse.",
		es: "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'es-mx': "Baraja hasta 5 Pokémon de tu pila de descartes en tu mazo.",
		de: "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck.",
		it: "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684326,
		cardmarket: 877532
	}
}

export default card
