import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miriam",
		'fr-fr': "Mimosa",
		'es-es': "Mimí",
		'it-it': "Mimosa",
		'pt-br': "Miriam",
		'de-de': "Mimi"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 5 Pokémon from your discard pile into your deck. If you shuffled any cards into your deck in this way, draw 3 cards.",
		'fr-fr': "Mélangez avec votre deck jusqu'à 5 Pokémon de votre pile de défausse. Si vous avez mélangé au moins une carte avec votre deck de cette façon, piochez 3 cartes.",
		'es-es': "Pon hasta 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas. Si has puesto alguna carta en tu baraja de esta manera, roba 3 cartas.",
		'it-it': "Rimischia fino a cinque Pokémon dalla tua pila degli scarti nel tuo mazzo. Se hai rimischiato delle carte nel tuo mazzo in questo modo, pesca tre carte.",
		'pt-br': "Embaralhe até 5 Pokémon da sua pilha de descarte no seu baralho. Se você embaralhou qualquer carta no seu baralho desta forma, compre 3 cartas.",
		'de-de': "Mische bis zu 5 Pokémon aus deinem Ablagestapel in dein Deck. Wenn du auf diese Weise mindestens 1 Karte in dein Deck gemischt hast, ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Akira Komayama",

	thirdParty: {
        cardmarket: 702547,
        tcgplayer: 487061
    }
}

export default card