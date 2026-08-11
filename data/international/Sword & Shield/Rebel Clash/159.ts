import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Full Heal",
		'fr-fr': "Total Soin",
		'es-es': "Cura Total",
		'it-it': "Cura Totale",
		'pt-br': "Cura Total",
		'de-de': "Hyperheiler"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Your Active Pokémon recovers from all Special Conditions.",
		'fr-fr': "Votre Pokémon Actif guérit de tous les États Spéciaux.",
		'es-es': "Tu Pokémon Activo se recupera de todas las Condiciones Especiales.",
		'it-it': "Il tuo Pokémon attivo guarisce da tutte le condizioni speciali.",
		'pt-br': "O seu Pokémon Ativo se recupera de todas as Condições Especiais.",
		'de-de': "Dein Aktives Pokémon erholt sich von allen Speziellen Zuständen."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458188,
				tcgplayer: 213262
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458188,
				tcgplayer: 213262
			}
		},
	],
}

export default card
