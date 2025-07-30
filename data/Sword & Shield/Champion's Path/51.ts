import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Full Heal",
		fr: "Total Soin",
		es: "Curación total",
		it: "Recupero Totale",
		pt: "Água Fresca",
		de: "Hyperheiler"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your Active Pokémon recovers from all Special Conditions.",
		fr: "Votre Pokémon Actif guérit de tous les États Spéciaux.",
		es: "Elimina todas las Condiciones Especiales de tu Pokémon Activo.",
		it: "Rimuovi tutte le Condizioni Speciali dal tuo Pokémon Attivo.",
		pt: "Remova todas as Condições Especiais do seu Pokémon Ativo.",
		de: "Alle Speziellen Zustände auf deinen Aktiven Pokémon verlieren ihre Wirkung."
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
