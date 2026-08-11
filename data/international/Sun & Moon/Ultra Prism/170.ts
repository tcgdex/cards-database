import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Unit Energy GrassFireWater",
		'fr-fr': "Énergie Unitaire GrassFireWater",
		'es-es': "Energía Unidad GrassFireWater",
		'it-it': "Energia Unione GrassFireWater",
		'pt-br': "Energia Unitária GrassFireWater",
		'de-de': "Aggregat-Energie GrassFireWater"
	},
	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Energy",

	set: Set,











	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon, elle fournit de l’Énergie Grass, Fire ou Water mais ne fournit qu’une Énergie à la fois.",
		'en-us': "This card provides Colorless Energy. \n\nWhile this card is attached to a Pokémon, it provides Grass, Fire, and Water Energy but provides only 1 Energy at a time.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nMientras esta carta esté unida a un Pokémon, proporciona Energía Grass, Fire o Water, pero proporciona solo 1 Energía a la vez.",
		'it-it': "Questa carta fornisce Energia Colorless.\n\nQuando è assegnata a un Pokémon, questa carta fornisce Energia Grass, Fire o Water, ma solo una alla volta.",
		'pt-br': "Esta carta fornece Energia Colorless.\n\nEnquanto esta carta estiver ligada a um Pokémon, fornecerá Energias Grass, Fire e Water, mas só fornecerá 1 Energia por vez.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nIst sie an ein Pokémon angelegt, liefert diese Karte Grass-, Fire- und Water-Energie, aber immer nur jeweils 1 Energie."
	},

energyType: "Special",
}

export default card
