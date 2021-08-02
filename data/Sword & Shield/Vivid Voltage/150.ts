import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Circhester Bath",
		fr: "Thermes de Ludester",
		es: "Termas de Auriga",
		it: "Terme di Circhester",
		pt: "Banho de Circhester",
		de: "Circhester-Therme"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "All Basic Pokémon (both yours and your opponent’s) take 20 less damage from attacks from the opponent’s Pokémon (after applying Weakness and Resistance).",
		fr: "Tous les Pokémon de base (les vôtres et ceux de votre adversaire) subissent 20 dégâts de moins provenant des attaques des Pokémon de l’adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Los ataques de los Pokémon del rival hacen 20 puntos de daño menos a todos los Pokémon Básicos (tanto tuyos como de tu rival) (después de aplicar Debilidad y Resistencia).",
		it: "Tutti i Pokémon Base, sia tuoi che del tuo avversario,subiscono 20 danni in meno dagli attacchi dei Pokémon dell’avversario, dopo aver applicato debolezza e resistenza.",
		pt: "Todos os Pokémon Básicos (seus e do seu oponente) recebem 20 pontos de dano a menos de ataques dos Pokémon do oponente (depois de aplicar Fraqueza e Resistência).",
		de: "Allen Basis-Pokémon (deinen und denen deines Gegners) werden durch Attacken von Pokémon des Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Stadium",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
