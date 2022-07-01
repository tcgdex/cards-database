import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Spark",
		fr: "Capitaine d'équipe Spark",
		es: "Líder de Equipo Spark",
		it: "Spark",
		pt: "Spark",
		de: "Spark"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If you drew any cards in this way, flip a coin. If heads, attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
		fr: "Piochez 2 cartes. Si vous avez pioché des cartes de cette façon, lancez une pièce. Si c'est face, attachez une carte Énergie Lightning de votre pile de défausse à l'un de vos Pokémon de Banc.",
		es: "Roba 2 cartas. Si has robado alguna carta de esta manera, lanza 1 moneda. Si sale cara, une 1 carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
		it: "Pesca due carte. Se hai pescato delle carte in questo modo, lancia una moneta. Se esce testa, assegna a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
		pt: "Compre 2 cartas. Se você comprar qualquer carta desta forma, jogue 1 moeda. Se sair cara, ligue 1 carta de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
		de: "Ziehe 2 Karten. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, wirf 1 Münze. Lege bei Kopf 1 Lightning-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card