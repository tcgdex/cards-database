import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Emma",
		'fr-fr': "Millie",
		'es-es': "Matière",
		'es-mx': "Matière",
		'de-de': "Matière",
		'it-it': "Matière",
		'pt-br': "Emma"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		'en-us': "Your opponent reveals their hand, and you draw a card for each Pokémon you find there.",
		'fr-fr': "Votre adversaire montre sa main et vous piochez une carte pour chaque Pokémon que vous y trouvez.",
		'es-es': "Tu rival enseña las cartas de su mano, y tú robas 1 carta por cada Pokémon que encuentres entre ellas.",
		'es-mx': "Tu rival muestra su mano, y tú robas 1 carta por cada Pokémon que encuentres en ella.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten und du ziehst 1 Karte für jedes Pokémon, das du dort findest.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano e tu peschi una carta per ogni Pokémon presente tra quelle carte.",
		'pt-br': "Seu oponente revela a mão dele e você compra uma carta para cada Pokémon que você encontrar lá."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886470,
				tcgplayer: 693479
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886470,
				tcgplayer: 693479
			}
		},
	],
}

export default card
