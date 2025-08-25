import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mirage Stadium",
		de: "Fata Morgana-Stadion"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		de: "Immer wenn ein Spieler versucht, in seinem Zug ein Pokémon zurückzuziehen, wirft dieser Spieler eine Münze. Bei \"Kopf\" zieht der Spieler das Pokémon zurück (und legt die Energiekarte ganz normal auf den Ablagestapel). Bei \"Zahl\" kann sich dieses Pokémon in diesem nicht zurückziehen (der Spieler legt keine Energiekarte auf den Ablagestapel)."
	},

	thirdParty: {
		cardmarket: 275390,
		tcgplayer: 87500
	}
}

export default card
