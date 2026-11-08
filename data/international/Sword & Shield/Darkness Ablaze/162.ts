import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Glimwood Tangle",
		'fr-fr': "Forêt de Lumirinth",
		'es-es': "Bosque Lumirinto",
		'it-it': "Bosco Brillabirinto",
		'pt-br': "Bosque Glimwood",
		'de-de': "Wirrschein-Wald"
	},

	illustrator: "aky CG Works",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Once during each player's turn, after that player flips any coins for an attack, they may ignore all results of those coin flips and begin flipping those coins again.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, après que ce joueur a lancé des pièces pour une attaque, il peut ignorer le résultat de ces lancers de pièce et lancer ces pièces à nouveau.",
		'es-es': "Una vez durante el turno de cada jugador, después de que ese jugador lance las monedas para un ataque, puede ignorar todos los resultados de esos lanzamientos de monedas y lanzar esas monedas de nuevo.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, dopo che quel giocatore ha lanciato una moneta come richiesto da un attacco, questi può ignorare i risultati di quei lanci e lanciare nuovamente la moneta lo stesso numero di volte.",
		'pt-br': "Uma vez durante o turno de cada jogador, após aquele jogador jogar moedas para um ataque, ele(a) poderá ignorar os resultados das moedas e jogá-las novamente.",
		'de-de': "Einmal Während des Zuges jedes Spielers, nachdem jener Spieler eine oder mehrere Münzen für eine Attacke geworfen hat, kann er alle Ergebnisse jener Münzwürfe ignorieren und jene Münzen erneut werfen."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483689,
				tcgplayer: 219276
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483689,
				tcgplayer: 219276
			}
		},
	],
}

export default card
