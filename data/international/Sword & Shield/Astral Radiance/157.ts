import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
		'es-es': "Fósil Desconocido",
		'it-it': "Fossile Sconosciuto",
		'pt-br': "Fóssil Não Identificado",
		'de-de': "Unbekanntes Fossil"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Play this card as if it were a 60-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play.\nThis card can't retreat.",
		'fr-fr': "Jouez cette carte comme si c'était un Pokémon Colorless de base avec 60 PV. N'importe quand pendant votre tour, vous pouvez défausser cette carte du jeu.\nCette carte ne peut pas battre en retraite.",
		'es-es': "Juega esta carta como si fuera un Pokémon Colorless Básico de 60 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego.\nEsta carta no puede retirarse.",
		'it-it': "Gioca questa carta come se fosse un Pokémon Base Colorless con 60 PS. Durante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.\nQuesta carta non può ritirarsi.",
		'pt-br': "Jogue esta carta como se fosse um Pokémon Colorless Básico com PS 60. A qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.\nEsta carta não pode recuar.",
		'de-de': "Spiele diese Karte, als ob sie ein Basis-Colorless-Pokémon mit 60 KP wäre. Du kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.\nDiese Karte kann sich nicht zurückziehen."
	},

	trainerType: "Item",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658818,
				tcgplayer: 272409
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658818,
				tcgplayer: 272409
			}
		},
	],
}

export default card
