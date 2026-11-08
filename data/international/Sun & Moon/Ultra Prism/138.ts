import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Unit Energy LightningPsychicMetal",
		'fr-fr': "Énergie Unitaire LightningPsychicMetal",
		'es-es': "Energía Unidad LightningPsychicMetal",
		'it-it': "Energia Unione LightningPsychicMetal",
		'pt-br': "Energia Unitária LightningPsychicMetal",
		'de-de': "Aggregat-Energie LightningPsychicMetal"
	},
	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",

	set: Set,











	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon, elle fournit de l’Énergie Lightning, Psychic ou Metal mais ne fournit qu’une Énergie à la fois.",
		'en-us': "This card provides Colorless Energy. \n\nWhile this card is attached to a Pokémon, it provides Lightning, Psychic, and Metal Energy but provides only 1 Energy at a time.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nMientras esta carta esté unida a un Pokémon, proporciona Energía Lightning, Psychic o Metal, pero proporciona solo 1 Energía a la vez.",
		'it-it': "Questa carta fornisce Energia Colorless.\n\nQuando è assegnata a un Pokémon, questa carta fornisce Energia Lightning, Psychic o Metal, ma solo una alla volta.",
		'pt-br': "Esta carta fornece Energia Colorless.\n\nEnquanto esta carta estiver ligada a um Pokémon, fornecerá Energias Lightning, Psychic e Metal, mas só fornecerá 1 Energia por vez.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nIst sie an ein Pokémon angelegt, liefert diese Karte Lightning-, Psychic- und Metal-Energie, aber immer nur jeweils 1 Energie."
	},

energyType: "Special",
}

export default card
