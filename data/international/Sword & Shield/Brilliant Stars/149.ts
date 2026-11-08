import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Yell's Cheer",
		'fr-fr': "Encouragement de la Team Yell",
		'es-es': "Clamor del Team Yell",
		'it-it': "Tifo del Team Yell",
		'pt-br': "Torcida da Equipe Yell",
		'de-de': "Jubel von Team Yell"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 3 in any combination of Pokémon and Supporter cards, except for Team Yell's Cheer, from your discard pile into your deck.",
		'fr-fr': "Mélangez avec votre deck une combinaison d'un maximum de 3 Pokémon et cartes Supporter de votre pile de défausse, à l'exception d'Encouragement de la Team Yell.",
		'es-es': "Pon hasta 3 cartas de Pokémon y de Partidario, en cualquier combinación, excepto Clamor del Team Yell, de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia fino a tre Pokémon e carte Aiuto, a eccezione di Tifo del Team Yell, in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 3 cartas de Pokémon e de Apoiador, exceto por Torcida da Equipe Yell, da sua pilha de descarte no seu baralho em qualquer combinação.",
		'de-de': "Mische eine beliebige Kombination aus bis zu 3 Pokémon und Unterstützerkarten, außer Jubel von Team Yell, aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608695,
				tcgplayer: 263869
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608695,
				tcgplayer: 263869
			}
		},
	],
}

export default card
