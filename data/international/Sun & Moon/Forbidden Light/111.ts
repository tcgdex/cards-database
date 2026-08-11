import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Lysandre Labs",
		'fr-fr': "Labos Lysandre",
		'es-es': "Laboratorios Lysson",
		'it-it': "Laboratori Elisio",
		'pt-br': "Laboratórios Lysandre",
		'de-de': "Labor von Flordelis"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les cartes Outil Pokémon en jeu (les vôtres et celles de votre adversaire) n’ont aucun effet.",
		'en-us': "Pokémon Tool cards in play (both yours and your opponent’s) have no effect.",
		'es-es': "Las cartas de Herramienta Pokémon en juego (tanto tuyas como de tu rival) no tienen efecto.",
		'it-it': "Le carte Oggetto Pokémon in gioco, sia tue che del tuo avversario, non hanno effetto.",
		'pt-br': "Cartas de Ferramenta Pokémon em jogo (suas e do seu oponente) não têm efeito.",
		'de-de': "Pokémon-Ausrüstungen im Spiel (deine und die deines Gegners) haben keinen Effekt."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 355624,
		tcgplayer: 165774
	}
}

export default card
