import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Caretaker",
		'fr-fr': "Intendant",
		'es-es': "Cuidador",
		'it-it': "Responsabile",
		'pt-br': "Zelador",
		'de-de': "Verwalter"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If you drew any cards in this way and if Community Center is in play, shuffle this Caretaker into your deck instead of discarding it.",
		'fr-fr': "Piochez 2 cartes. Si vous piochez au moins une carte de cette façon et que Centre Culturel est en jeu, mélangez cet Intendant avec votre deck au lieu de le défausser.",
		'es-es': "Roba 2 cartas. Si has robado alguna carta de esta manera y Centro Cultural está en juego, pon esta carta de Cuidador en tu baraja, en vez de descartarla, y barájalas todas.",
		'it-it': "Pesca due carte. Se hai pescato delle carte in questo modo e se Circolo Comunale è in gioco, rimischia questa carta Responsabile nel tuo mazzo invece di scartarla.",
		'pt-br': "Compre 2 cartas. Se você comprou qualquer carta desta forma e se Centro Comunitário estiver em jogo, embaralhe este Zelador no seu baralho ao invés de descartá-lo.",
		'de-de': "Ziehe 2 Karten. Wenn du auf diese Weise mindestens 1 Karte gezogen hast und wenn Gemeindehaus im Spiel ist, mische diese Verwalter-Karte in dein Deck, anstatt sie auf deinen Ablagestapel zu legen."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769318,
				tcgplayer: 550188
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769318,
				tcgplayer: 550188
			}
		},
	],

	illustrator: "Akira Komayama",

}

export default card