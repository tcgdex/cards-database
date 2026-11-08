import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Lysandre ◇",
		'fr-fr': "Lysandre ◇",
		'es-es': "Lysson ◇",
		'it-it': "Elisio ◇",
		'pt-br': "Lysandre ◇",
		'de-de': "Flordelis ◇"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "For each of your Fire Pokémon in play, put a card from your opponent’s discard pile in the Lost Zone.",
		'fr-fr': "Pour chacun de vos Pokémon Fire en jeu, placez une carte de la pile de défausse de votre adversaire dans la Zone Perdue.",
		'es-es': "Por cada uno de tus Pokémon Fire en juego, pon 1 carta de la pila de descartes de tu rival en la Zona Perdida.",
		'it-it': "Per ogni tuo Pokémon Fire in gioco, prendi una carta dalla pila degli scarti del tuo avversario e mettila nell’area perduta.",
		'pt-br': "Para cada um dos seus Pokémon Fire em jogo, coloque 1 carta da pilha de descarte do seu oponente na Zona Perdida.",
		'de-de': "Lege für jedes deiner Fire-Pokémon im Spiel 1 Karte aus dem Ablagestapel deines Gegners ins Nirgendwo."
	}
}

export default card
