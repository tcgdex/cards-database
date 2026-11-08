import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Full Heal",
		'fr-fr': "Total Soin",
		'es-es': "Curación total",
		'it-it': "Recupero Totale",
		'pt-br': "Água Fresca",
		'de-de': "Hyperheiler"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Your Active Pokémon recovers from all Special Conditions.",
		'fr-fr': "Votre Pokémon Actif guérit de tous les États Spéciaux.",
		'es-es': "Elimina todas las Condiciones Especiales de tu Pokémon Activo.",
		'it-it': "Rimuovi tutte le Condizioni Speciali dal tuo Pokémon Attivo.",
		'pt-br': "Remova todas as Condições Especiais do seu Pokémon Ativo.",
		'de-de': "Alle Speziellen Zustände auf deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500110,
		tcgplayer: 223051
	}
}

export default card
