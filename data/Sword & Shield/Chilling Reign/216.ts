import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Karen's Conviction",
		fr: "Conviction de Marion",
		es: "Convicción de Karen",
		it: "Fermezza di Karen",
		pt: "Convicção da Karen",
		de: "Melanies Überzeugung"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "During this turn, your Single Strike Pokémon's attacks do 20 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
		fr: "Pendant ce tour, les attaques de vos Pokémon Poing Final infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
		es: "Durante este turno, los ataques de tus Pokémon Golpe Brusco hacen 20 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Durante questo turno, gli attacchi dei tuoi Pokémon Colpo Singolo infliggono 20 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza.",
		pt: "Durante este turno, os ataques dos seus Pokémon Golpe Decisivo causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que ele(a) pegou (antes de aplicar Fraqueza e Resistência).",
		de: "Während dieses Zuges fügen die Attacken deiner Fokussierter-Angriff-Pokémon dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Hideki Ishikawa",
	regulationMark: "E"
}

export default card
