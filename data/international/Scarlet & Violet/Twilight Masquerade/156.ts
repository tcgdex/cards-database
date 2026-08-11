import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Love Ball",
		'fr-fr': "Love Ball",
		'es-es': "Amor Ball",
		'it-it': "Love Ball",
		'pt-br': "Bola Amor",
		'de-de': "Sympaball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for a Pokémon with the same name as 1 of your opponent's Pokémon in play, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon du même nom que l'un des Pokémon en jeu de votre adversaire, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon que tenga el mismo nombre que uno de los Pokémon en juego de tu rival, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon con lo stesso nome di uno dei Pokémon in gioco del tuo avversario, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por um Pokémon no seu baralho que tenha o mesmo nome de 1 dos Pokémon do seu oponente em jogo, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon mit demselben Namen wie 1 Pokémon deines Gegners im Spiel, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769330,
				tcgplayer: 550200
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769330,
				tcgplayer: 550200
			}
		},
	],

	illustrator: "Studio Bora Inc.",

}

export default card