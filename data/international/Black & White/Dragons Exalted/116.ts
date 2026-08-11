import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Tool Scrapper",
		'fr-fr': "Arrache-Outil",
		'es-es': "Reciclaherramientas",
		'it-it': "Scartaoggetti",
		'pt-br': "Sucateador de Ferramentas",
		'de-de': "Ausrüstungsentsorger"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez jusqu’à 2 cartes Outil Pokémon attachées aux Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-les.",
		'en-us': "Choose up to 2 Pokémon Tool cards attached to Pokémon in play (yours or your opponent’s) and discard them.",
		'es-es': "Elige hasta 2 cartas de Herramienta Pokémon unidas a Pokémon en juego (tuyos o de tu rival) y descártalas.",
		'it-it': "Scegli fino a due carte Oggetto Pokémon assegnate ai Pokémon in gioco, tuoi o del tuo avversario, e poi scartale.",
		'pt-br': "Escolha até 2 cards de Ferramenta Pokémon, que estejam ligados aos Pokémon em jogo (seus ou de seu oponente) e descarte-os.",
		'de-de': "Wähle bis zu 2 Pokémon-Ausrüstungen, die an Pokémon im Spiel angelegt sind (an deine oder die deines Gegners),und lege sie auf den entsprechenden Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280555,
		tcgplayer: 89947
	}
}

export default card
