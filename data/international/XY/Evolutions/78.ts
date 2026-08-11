import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Full Heal",
		'fr-fr': "Total Soin",
		'es-es': "Cura Total",
		'it-it': "Cura Totale",
		'pt-br': "Cura Total",
		'de-de': "Hyperheiler"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		'en-us': "Remove all Special Conditions from your Active Pokémon.",
		'es-es': "Elimina todas las Condiciones Especiales de tu Pokémon Activo.",
		'it-it': "Rimuovi tutte le condizioni speciali dal tuo Pokémon attivo.",
		'pt-br': "Remova todas as Condições Especiais do seu Pokémon Ativo.",
		'de-de': "Alle Speziellen Zustände auf deinem Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 293439,
		tcgplayer: 124091
	}
}

export default card
