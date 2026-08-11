import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Doctor",
		'fr-fr': "Docteure",
		'es-es': "Doctora",
		'it-it': "Medico",
		'pt-br': "Médica",
		'de-de': "Ärztin"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If your opponent's Active Pokémon is a Pokémon VMAX, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si el Pokémon Activo de tu rival es un Pokémon VMAX, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",


	illustrator: "Sanosuke Sakuma",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567322,
				tcgplayer: 241826
			}
		},
	],
}

export default card
