import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Aroma Lady",
		'fr-fr': "Aromathérapeute",
		'es-es': "Señorita Aroma",
		'it-it': "Profumina",
		'pt-br': "Senhorita Aroma",
		'de-de': "Aromalady"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If you do, your Active Pokémon recovers from all Special Conditions.",
		'fr-fr': "Piochez 2 cartes. Dans ce cas, votre Pokémon Actif guérit de tous les États Spéciaux.",
		'es-es': "Roba 2 cartas. Si lo haces, tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
		'it-it': "Pesca due carte. Se lo fai, il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
		'pt-br': "Compre 2 cartas. Se fizer isto, seu Pokémon Ativo se recuperará de todas as Condições Especiais.",
		'de-de': "Ziehe 2 Karten. Wenn du das machst, erholt sich dein Aktives Pokémon von allen Speziellen Zuständen."
	},

	trainerType: "Supporter",
	illustrator: "En Morikura",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574257,
				tcgplayer: 246791
			}
		},
	],
}

export default card
