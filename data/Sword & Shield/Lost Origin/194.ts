import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Miss Fortune Sisters",
		fr: "Les Détroussœurs",
		es: "Hermanas Tres Malezas",
		it: "Sorelle Florido",
		pt: "Irmãs Infortúnio",
		de: "Banditenschwestern"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Look at the top 5 cards of your opponent's deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.",
		fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et défaussez le nombre voulu de cartes Objet que vous y trouvez. Votre adversaire mélange les autres cartes avec son deck.",
		es: "Mira las 5 primeras cartas de la baraja de tu rival y descarta cualquier cantidad de cartas de Objeto que encuentres entre ellas. Tu rival pone el resto de las cartas de nuevo en su baraja y las baraja todas.",
		it: "Guarda le prime cinque carte del mazzo del tuo avversario e scarta un numero qualsiasi di carte Strumento presenti tra esse. Il tuo avversario rimischia le altre carte nel suo mazzo.",
		pt: "Olhe as 5 cartas de cima do baralho do seu oponente e descarte qualquer número de cartas de Item que encontrar lá. Seu oponente embaralha as demais cartas de volta no próprio baralho.",
		de: "Schau dir die obersten 5 Karten des Decks deines Gegners an und lege beliebig viele Itemkarten, die du dort findest, auf seinen Ablagestapel. Dein Gegner mischt die anderen Karten zurück in sein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card