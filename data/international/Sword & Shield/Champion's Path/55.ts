import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Kabu",
		'fr-fr': "Kabu",
		'es-es': "Naboru",
		'it-it': "Kabu",
		'pt-br': "Kabu",
		'de-de': "Kabu"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 4 cards. If your Active Pokémon is your only Pokémon in play, draw 8 cards instead.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si votre Pokémon Actif est votre seul Pokémon en jeu, piochez 8 cartes à la place.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 4 cartas. Si tu Pokémon Activo es tu único Pokémon en juego, roba 8 cartas en vez de 4.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca quattro carte. Se il tuo Pokémon attivo è il tuo unico Pokémon in gioco, invece pescane otto.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 4 cartas. Se o seu Pokémon Ativo for o seu único Pokémon em jogo, compre 8 cartas ao invés de 4.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn dein Aktives Pokémon dein einziges Pokémon im Spiel ist, ziehe stattdessen 8 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500130,
		tcgplayer: 223055
	}
}

export default card
