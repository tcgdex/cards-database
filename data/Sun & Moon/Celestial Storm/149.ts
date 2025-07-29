import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste Télé",
		es: "Reportera de Televisión",
		it: "Reporter Televisivo",
		pt: "Repórter Televisivo",
		de: "TV-Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes. Ensuite, défaussez une carte de votre main. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		en: "Draw 3 cards. Then, discard a card from your hand. If you have no cards in your deck, you can’t play this card.",
		es: "Roba 3 cartas. Después, descarta 1 carta de tu mano. Si no tienes ninguna carta en tu baraja, no puedes jugar esta carta.",
		it: "Pesca tre carte. Poi scarta una delle carte che hai in mano. Se non hai carte nel mazzo, non puoi giocare questa carta.",
		pt: "Compre 3 cartas. Em seguida, descarte 1 carta da sua mão. Se você não tiver nenhuma carta no seu baralho, não poderá jogar esta carta.",
		de: "Ziehe 3 Karten. Lege anschließend 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du keine Karten in deinem Deck hast, kannst du diese Karte nicht spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361386
	}
}

export default card
