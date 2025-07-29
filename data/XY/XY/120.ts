import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Max Revive",
		fr: "Rappel Max",
		es: "Revivir Máximo",
		it: "Revitalizzante Max",
		pt: "Máximo Reviver",
		de: "Top-Beleber"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		en: "Put a Pokémon from your discard pile on top of your deck.",
		es: "Pon 1 Pokémon de tu pila de descartes en la parte superior de tu baraja.",
		it: "Prendi un Pokémon dalla tua pila degli scarti e mettilo in cima al tuo mazzo.",
		pt: "Coloque um Pokémon da sua pilha de descarte em cima do seu baralho.",
		de: "Lege 1 Pokémon von deinem Ablagestapel auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281457
	}
}

export default card
