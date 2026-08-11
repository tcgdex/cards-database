import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Field Blower",
		'fr-fr': "Nettoyage de Terrain",
		'es-es': "Soplador de Campo",
		'it-it': "Spazzacampo",
		'pt-br': "Ventilador de Campo",
		'de-de': "Feldgebläse"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez jusqu’à 2 cartes Outil Pokémon ou cartes Stade en jeu, (les vôtres ou celles de votre adversaire), quelle que soit la combinaison, et défaussez-les.",
		'en-us': "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (yours or your opponent’s) and discard them.",
		'es-es': "Elige, en cualquier combinación, hasta 2 cartas de Herramienta Pokémon y cartas de Estadio en juego (tuyas o de tu rival) y descártalas.",
		'it-it': "Scegli fino a due carte Oggetto Pokémon o Stadio in gioco, in qualsiasi combinazione, tue o del tuo avversario, e scartale.",
		'pt-br': "Escolha até 2 cartas de Ferramenta Pokémon e de Estádio em jogo em qualquer combinação (suas e do seu oponente) e descarte-as.",
		'de-de': "Wähle eine beliebige Kombination aus bis zu 2 Pokémon-Ausrüstungen und Stadionkarten im Spiel (deine oder die deines Gegners) und lege sie auf den Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 297611,
		tcgplayer: 131059
	}
}

export default card
