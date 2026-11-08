import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Circhester Bath",
		'fr-fr': "Thermes de Ludester",
		'es-es': "Termas de Auriga",
		'it-it': "Terme di Circhester",
		'pt-br': "Banho de Circhester",
		'de-de': "Circhester-Therme"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "All Basic Pokémon (both yours and your opponent's) take 20 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).",
		'fr-fr': "Tous les Pokémon de base (les vôtres et ceux de votre adversaire) subissent 20 dégâts de moins provenant des attaques des Pokémon de l'adversaire (après application de la Faiblesse et de la Résistance).",
		'es-es': "Los ataques de los Pokémon del rival hacen 20 puntos de daño menos a todos los Pokémon Básicos (tanto tuyos como de tu rival) (después de aplicar Debilidad y Resistencia).",
		'it-it': "Tutti i Pokémon Base, sia tuoi che del tuo avversario,subiscono 20 danni in meno dagli attacchi dei Pokémon dell'avversario, dopo aver applicato debolezza e resistenza.",
		'pt-br': "Todos os Pokémon Básicos (seus e do seu oponente) recebem 20 pontos de dano a menos de ataques dos Pokémon do oponente (depois de aplicar Fraqueza e Resistência).",
		'de-de': "Allen Basis-Pokémon (deinen und denen deines Gegners) werden durch Attacken von Pokémon des Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512460,
				tcgplayer: 226503
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512460,
				tcgplayer: 226503
			}
		},
	],
}

export default card
