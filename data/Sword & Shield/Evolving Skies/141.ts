import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Aroma Lady",
		fr: "Aromathérapeute",
		es: "Señorita Aroma",
		it: "Profumina",
		pt: "Aroma Lady",
		de: "Aromalady"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If you do, your Active Pokémon recovers from all Special Conditions.",
		fr: "Piochez 2 cartes. Dans ce cas, votre Pokémon Actif guérit de tous les États Spéciaux.",
		es: "Roba 2 cartas. Si lo haces, tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
		it: "Pesca due carte. Se lo fai, il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
		pt: "Draw 2 cards. If you do, your Active Pokémon recovers from all Special Conditions.",
		de: "Ziehe 2 Karten. Wenn du das machst, erholt sich dein Aktives Pokémon von allen Speziellen Zuständen."
	},

	trainerType: "Supporter",
	illustrator: "Megumi Mizutani"
}

export default card