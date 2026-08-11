import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Cape of Toughness",
		'fr-fr': "Cape d'Endurance",
		'es-es': "Capa de Dureza",
		'it-it': "Mantello della Tenacia",
		'pt-br': "Capa da Determinação",
		'de-de': "Umhang der Stärke"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "The Basic Pokémon this card is attached to gets +50 HP, except Pokémon-GX.",
		'fr-fr': "Cette carte ajoute 50 PV au Pokémon de base auquel elle est attachée, sauf s'il s'agit d'un Pokémon-GX.",
		'es-es': "El Pokémon Básico al que esté unida esta carta obtiene 50 PS más, excepto los Pokémon-GX.",
		'it-it': "Il Pokémon Base a cui è assegnata questa carta ha 50 PS in più, a eccezione dei Pokémon-GX.",
		'pt-br': "O Pokémon Básico ao qual esta carta está ligada recebe 50 PS a mais, exceto por Pokémon-GX .",
		'de-de': "Das Basis-Pokémon, an das diese Karte angelegt ist, erhält +50 KP, außer Pokémon-GX."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483679,
				tcgplayer: 219272
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483679,
				tcgplayer: 219272
			}
		},
	],
}

export default card
