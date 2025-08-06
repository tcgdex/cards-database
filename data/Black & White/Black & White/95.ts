import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Full Heal",
		fr: "Total Soin",
		es: "Curación Total",
		it: "Recupero Totale",
		pt: "Água Fresca",
		de: "Hyperheiler"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez tous les États Spéciaux de votre Pokémon Actif.",
		en: "Remove all Special Conditions from your Active Pokémon.",
		es: "Elimina todas las Condiciones Especiales de tu Pokémon Activo.",
		it: "Rimuovi tutte le condizioni speciali dal tuo Pokémon attivo.",
		pt: "Remova todas as Condições Especiais do seu Pokémon Ativo.",
		de: "Alle Speziellen Zustände auf deinem Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279833,
		tcgplayer: 85580
	}
}

export default card
