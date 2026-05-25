import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Emma",
		fr: "Millie",
		es: "Matière",
		'es-mx': "Matière",
		de: "Matière",
		it: "Matière",
		pt: "Emma"
	},

	illustrator: "Akira Komayama",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693480
	},

	effect: {
		en: "Your opponent reveals their hand, and you draw a card for each Pokémon you find there.",
		fr: "Votre adversaire montre sa main et vous piochez une carte pour chaque Pokémon que vous y trouvez.",
		es: "Tu rival enseña las cartas de su mano, y tú robas 1 carta por cada Pokémon que encuentres entre ellas.",
		'es-mx': "Tu rival muestra su mano, y tú robas 1 carta por cada Pokémon que encuentres en ella.",
		de: "Dein Gegner zeigt dir seine Handkarten und du ziehst 1 Karte für jedes Pokémon, das du dort findest.",
		it: "Il tuo avversario mostra le carte che ha in mano e tu peschi una carta per ogni Pokémon presente tra quelle carte.",
		pt: "Seu oponente revela a mão dele e você compra uma carta para cada Pokémon que você encontrar lá."
	}
}

export default card