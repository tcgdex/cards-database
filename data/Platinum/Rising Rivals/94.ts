import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Sunyshore City Gym",
		fr: "Le gymnase de Rivamar City",
		de: "Sonnewik-Arena"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Tous dégâts infligés par des attaques de Pokémon Électrique (les vôtres et ceux de votre adversaire) au Pokémon Défenseur ne sont pas affectés par la Résistance. Chaque Pokémon Électrique en jeu (les vôtres et ceux de votre adversaire) ne possède pas de Faiblesse.",
		de: "Schaden, der den Verteidigenden Pokémon durch -Pokémon (deinen und denen deines Gegners) zugefügt wird, wird durch Resistenz nicht verändert. Alle -Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche.",
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278668,
		tcgplayer: 89625
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
