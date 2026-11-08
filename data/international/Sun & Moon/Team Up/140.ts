import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Erika’s Hospitality",
		'fr-fr': "Hospitalité d’Erika",
		'es-es': "Hospitalidad de Erika",
		'it-it': "Ospitalità di Erika",
		'pt-br': "Hospitalidade da Érica",
		'de-de': "Erikas Gastfreundschaft"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous avez 4 autres cartes ou moins dans votre main.\n\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		'en-us': "You can play this card only if you have 4 or fewer other cards in your hand.\n\nDraw a card for each of your opponent’s Pokémon in play.",
		'es-es': "Puedes jugar esta carta solo si tienes otras 4 cartas o menos en tu mano.\n\nRoba 1 carta por cada uno de los Pokémon en juego de tu rival.",
		'it-it': "Puoi giocare questa carta solo se hai quattro o meno altre carte in mano.\n\nPesca una carta per ogni Pokémon del tuo avversario in gioco.",
		'pt-br': "Você só pode jogar esta carta se tiver 4 ou menos outras cartas na sua mão.\n\nCompre 1 carta para cada um dos Pokémon do seu oponente em jogo.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 4 oder weniger andere Karten auf deiner Hand hast.\n\n\nZiehe 1 Karte für jedes Pokémon deines Gegners im Spiel."
	},
	trainerType: "Supporter",

}

export default card
