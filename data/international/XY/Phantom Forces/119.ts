import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Xerosic",
		'fr-fr': "Xanthin",
		'es-es': "Xero",
		'it-it': "Xante",
		'pt-br': "Xerosic",
		'de-de': "Xeros"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez une carte Outil Pokémon ou Énergie spéciale attachée à un Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-la.",
		'en-us': "Choose a Pokémon Tool or Special Energy card attached to a Pokémon in play (yours or your opponent's) and discard it.",
		'es-es': "Elige 1 carta de Herramienta Pokémon o 1 carta de Energía Especial unida a 1 Pokémon en juego (tuyo o de tu rival) y descártala.",
		'it-it': "Scegli una carta Oggetto Pokémon o Energia speciale assegnata a un Pokémon in gioco, tuo o del tuo avversario, e poi scartala.",
		'pt-br': "Escolha um card de Ferramenta Pokémon ou Energia Especial ligado ao Pokémon em jogo (seu ou do seu oponente) e descarte-o.",
		'de-de': "Wähle 1 Pokémon-Ausrüstung oder 1 Spezial-Energiekarte, die an 1 Pokémon im Spiel angelegt ist (an deine oder die deines Gegners), und lege sie auf den Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281917,
		tcgplayer: 94679
	}
}

export default card
