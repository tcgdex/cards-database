import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Sacred Ash",
		fr: "Cendre Sacrée",
		es: "Ceniza Sagrada",
		de: "Zauberasche",
		it: "Cenere magica",
		pt: "Cinza Sagrada"
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",
	illustrator: "Toyste Beach",
	effect: {
		en: "Shuffle 5 Pokémon from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse.",
		es: "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		de: "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck.",
		it: "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho."
	},
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
