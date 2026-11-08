import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Norman",
		'fr-fr': "Norman",
		'es-es': "Norman",
		'it-it': "Norman",
		'pt-br': "Norman",
		'de-de': "Norman"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If your opponent's Active Pokémon is a Pokémon ex, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Si le Pokémon Actif de votre adversaire est un Pokémon-ex, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si el Pokémon Activo de tu rival es un Pokémon ex, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se il Pokémon attivo del tuo avversario è un Pokémon-ex, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se o Pokémon Ativo do seu oponente for um Pokémon ex, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740780,
				tcgplayer: 523918,
				cardtrader: 265370
			}
		},
	],

	illustrator: "Hideki Ishikawa",

	
}

export default card
