import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Full Heal",
		fr: "Total Soin",
		es: "Cura Total",
		it: "Cura Totale",
		pt: "Cura Total",
		de: "Hyperheiler"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your Active Pokémon recovers from all Special Conditions.",
		fr: "Votre Pokémon Actif guérit de tous les États Spéciaux.",
		es: "Tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
		it: "Il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
		pt: "O seu Pokémon Ativo se recupera de todas as Condições Especiais.",
		de: "Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen."
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
		cardmarket: 458188
	}
}

export default card
