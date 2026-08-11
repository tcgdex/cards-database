import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Weakness Guard Energy",
		'fr-fr': "Énergie Garde Faiblesse",
		'es-es': "Energía Guardia Debilidad",
		'it-it': "Energia Blocco Debolezza",
		'pt-br': "Energia de Proteção de Fraqueza",
		'de-de': "Schwächewächter-Energie"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "This card provides Colorless Energy.\n\nThe Pokémon this card is attached to has no Weakness.",
		'fr-fr': "Cette carte fournit de l’Énergie Colorless.\n\nLe Pokémon auquel cette carte est attachée n’a pas de Faiblesse.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nEl Pokémon al que esté unida esta carta no tiene ninguna Debilidad.",
		'it-it': "Questa carta fornisce Energia Colorless.\n\nIl Pokémon a cui è assegnata questa carta non ha debolezza.",
		'pt-br': "Esta carta fornece Energia Colorless.\n\nO Pokémon ao qual esta carta está ligada não possui Fraqueza.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nDas Pokémon, an das diese Karte angelegt ist, hat keine Schwäche."
	},

	thirdParty: {
		cardmarket: 389082,
		tcgplayer: 195333
	}
}

export default card
