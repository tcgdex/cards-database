import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Fossil Quarry",
		fr: "Carrière Fossile",
		es: "Cantera de Fósiles",
		'es-mx': "Cantera de Fósiles",
		de: "Fossiliengrube",
		it: "Cava di Fossili",
		pt: "Pedreira de Fóssil"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		en: "Once during each player's turn, that player may search their deck for up to 2 Item cards that have \"Antique\" in their name and put them onto their Bench. Then, that player shuffles their deck.",
		fr: "Une fois pendant le tour de chaque personne, cette personne-là peut chercher dans son deck jusqu'à 2 cartes Objet ayant \" Ancien \" dans leur nom et les placer sur son Banc. Cette personne mélange ensuite son deck.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede buscar en su baraja hasta 2 cartas de Objeto que tengan \"Antiguo\" en su nombre y ponerlas en su Banca. Después, ese jugador baraja las cartas de su baraja.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede buscar en su mazo hasta 2 cartas de Objeto que tengan \"Antiguo\" en su nombre y ponerlas en su Banca. Después, ese jugador baraja su mazo.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler sein Deck nach bis zu 2 Itemkarten durchsuchen, bei denen \"Antikes\" oder \"Antiker\" zum Namen gehört, und sie auf seine Bank legen. Jener Spieler mischt anschließend sein Deck.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può cercare nel proprio mazzo fino a due carte Strumento che hanno \"Vecchio\" o \"Vecchia\" nel nome e metterle nella propria panchina. Poi quel giocatore rimischia il proprio mazzo.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá procurar no próprio baralho por até 2 cartas de Item que têm \"Arcaico\" em seu nome e colocá-las no próprio Banco. Em seguida, aquele jogador embaralha o próprio baralho."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895860,
				tcgplayer: 704833
			}
		},
	],
}

export default card
