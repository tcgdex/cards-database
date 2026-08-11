import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Counter Catcher",
		'fr-fr': "Attrape-Riposte",
		'es-es': "Capturador Contraataque",
		'it-it': "Contracchiappa-Pokémon",
		'pt-br': "Pegador de Contra-ataque",
		'de-de': "Konterfänger"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous pouvez jouer cette carte seulement s'il vous reste plus de cartes Récompense que votre adversaire.",
		'en-us': "",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 311967,
		tcgplayer: 149145
	}
}

export default card
