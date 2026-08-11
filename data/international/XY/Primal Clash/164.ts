import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Weakness Policy",
		'fr-fr': "VulnéAssurance",
		'es-es': "Seguro Debilidad",
		'it-it': "Vulneropolizza",
		'pt-br': "Política de Fraqueza",
		'de-de': "Schwächenschutz"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "The Pokémon this card is attached to has no Weakness.",
		'fr-fr': "Le Pokémon auquel cette carte est attachée n'a pas de Faiblesse.",
		'es-es': "El Pokémon al que esté unida esta carta no tiene ninguna Debilidad.",
		'it-it': "Il Pokémon a cui è assegnata questa carta non ha debolezza.",
		'pt-br': "O Pokémon ao qual este card está ligado não tem Fraqueza.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, hat keine Schwäche."
	},

	thirdParty: {
		cardmarket: 273673,
		tcgplayer: 96062
	}
}

export default card
