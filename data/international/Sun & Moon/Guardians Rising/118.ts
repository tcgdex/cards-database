import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Altar of the Sunne",
		'fr-fr': "Autel du Soleil",
		'es-es': "Altar del Sol",
		'it-it': "Altare Solare",
		'pt-br': "Altar Solar",
		'de-de': "Sonnenkreis-Podium"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les Pokémon Fire et les Pokémon Metal (les vôtres et ceux de votre adversaire) n’ont pas de Faiblesse.",
		'en-us': "Fire Pokémon and Metal Pokémon (both yours and your opponent’s) have no Weakness.",
		'es-es': "Los Pokémon Fire y los Pokémon Metal (tanto tuyos como de tu rival) no tienen Debilidad.",
		'it-it': "I Pokémon Fire e i Pokémon Metal, sia tuoi che del tuo avversario, non hanno debolezza.",
		'pt-br': "Os Pokémon Fire e os Pokémon Metal (seus e do seu oponente) não têm Fraqueza.",
		'de-de': "Fire-Pokémon und Metal-Pokémon (deine und die deines Gegners) haben keine Schwäche."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 297570,
		tcgplayer: 131038
	}
}

export default card
