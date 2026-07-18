import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Jett",
		fr: "Bridjet",
		es: "Viona",
		'es-mx': "Viona",
		de: "Jette",
		it: "Aviona",
		pt: "Jett"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Draw a card for each of your opponent's Mega Evolution Pokémon ex in play.",
		fr: "Piochez une carte pour chacun des Pokémon-ex Méga-Évolution en jeu de votre adversaire.",
		es: "Roba 1 carta por cada uno de los Pokémon ex Megaevolución en juego de tu rival.",
		'es-mx': "Roba 1 carta por cada uno de los Pokémon ex Megaevolución en juego de tu rival.",
		de: "Ziehe 1 Karte für jedes Mega-Entwicklungs-Pokémon-ex deines Gegners im Spiel.",
		it: "Pesca una carta per ciascuno dei Pokémon-ex Megaevoluzione del tuo avversario in gioco.",
		pt: "Compre uma carta para cada um dos Pokémon ex de Megaevolução do seu oponente em jogo."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895863,
				tcgplayer: 704836
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895863,
				tcgplayer: 704836
			}
		},
	],
}

export default card
