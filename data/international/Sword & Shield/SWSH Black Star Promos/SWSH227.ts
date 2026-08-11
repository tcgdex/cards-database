import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Capitaine d'équipe Blanche",
		'de-de': "Blanche",
		'es-es': "Líder de Equipo Blanche",
		'pt-br': "Blanche",
		'it-it': "Blanche",
		'en-us': "Blanche"
	},

	rarity: "Promo",
	category: "Trainer",

	effect: {
		'fr-fr': "Piochez 2 cartes. Si vous avez pioché des cartes de cette façon, lancez une pièce. Si c'est face, attachez une carte Énergie {W} de votre pile de défausse à l'un de vos Pokémon de Banc.",
		'de-de': "Ziehe 2 Karten. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, wirf 1 Münze. Lege bei Kopf 1 {W}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an.",
		'es-es': "Roba 2 cartas. Si has robado alguna carta de esta manera, lanza 1 moneda. Si sale cara, une 1 carta de Energía {W} de tu pila de descartes a 1 de tus Pokémon en Banca.",
		'pt-br': "Compre 2 cartas. Se você comprar qualquer carta desta forma, jogue 1 moeda. Se sair cara, ligue 1 carta de Energia {W} da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
		'it-it': "Pesca due carte. Se hai pescato delle carte in questo modo, lancia una moneta. Se esce testa, assegna a uno dei tuoi Pokémon in panchina una carta Energia {W} dalla tua pila degli scarti.",
		'en-us': "Draw 2 cards. If you drew any cards in this way, flip a coin. If heads, attach a {W} Energy card from your discard pile to 1 of your Benched Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	thirdParty: {
		cardmarket: 653695
	}
}

export default card
