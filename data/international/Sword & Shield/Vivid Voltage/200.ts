import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Cape d'Endurance",
		'en-us': "Cape of Toughness",
		'es-es': "Capa de Dureza",
		'it-it': "Mantello della Tenacia",
		'pt-br': "Capa da Determinação",
		'de-de': "Umhang der Stärke"
	},

	illustrator: "inose yukie",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Cette carte ajoute 50 PV au Pokémon de base, à l'exception des Pokémon-GX, auquel elle est attachée.",
		'en-us': "The Basic Pokémon this card is attached to gets +50 HP, except Pokémon GX",
		'es-es': "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más, excepto los Pokémon-GX.",
		'it-it': "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più, a eccezione dei Pokémon-GX.",
		'pt-br': "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais, exceto por Pokémon-GX.",
		'de-de': "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP, außer Pokémon-GX."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 512710,
				tcgplayer: 226546
			}
		},
	],
}

export default card
