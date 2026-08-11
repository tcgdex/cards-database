import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Faba",
		'fr-fr': "Saubohne",
		'es-es': "Fabio",
		'it-it': "Vicio",
		'pt-br': "Fábio",
		'de-de': "Fabian"
	},

	illustrator: "take",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez une carte Outil Pokémon ou une carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire, ou une carte Stade en jeu, et placez-la dans la Zone Perdue.",
		'en-us': "Choose a Pokémon Tool or Special Energy card attached to 1 of your opponent’s Pokémon, or any Stadium card in play, and put it in the Lost Zone.",
		'es-es': "Elige 1 carta de Herramienta Pokémon o 1 carta de Energía Especial unida a 1 de los Pokémon de tu rival, o cualquier carta de Estadio en juego, y ponla en la Zona Perdida.",
		'it-it': "Scegli una carta Oggetto Pokémon o Energia speciale assegnata a uno dei Pokémon del tuo avversario o una carta Stadio in gioco e mettila nell’area perduta.",
		'pt-br': "Escolha 1 carta de Ferramenta Pokémon ou Energia Especial ligada a 1 dos Pokémon do seu oponente, ou qualquer carta de Estádio em jogo, e coloque-a na Zona Perdida.",
		'de-de': "Wähle 1 Pokémon-Ausrüstung oder Spezial-Energiekarte, die an 1 Pokémon deines Gegners angelegt ist, oder 1 beliebige Stadionkarte im Spiel und lege sie ins Nirgendwo."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 365841,
		tcgplayer: 179002
	}
}

export default card
