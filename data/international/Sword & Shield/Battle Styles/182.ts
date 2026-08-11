import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rapid Strike Energy",
		'fr-fr': "Énergie Mille Poings",
		'es-es': "Energía Golpe Fluido",
		'it-it': "Energia Colpo Rapido",
		'pt-br': "Energia Golpe Fluido",
		'de-de': "Fließender-Angriff-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",

	effect: {
		'en-us': "This card can only be attached to a Rapid Strike Pokémon. If this card is attached to anything other than a Rapid Strike Pokémon, discard this card.\nAs long as this card is attached to a Pokémon, it provides 2 in any combination of Water Energy and Fighting Energy.",
		'fr-fr': "Cette carte ne peut être attachée qu'à un Pokémon Mille Poings. Si cette carte est attachée à autre chose qu'un Pokémon Mille Poings, défaussez-la.\n\nTant que cette carte est attachée à un Pokémon, elle fournit une combinaison de 2 cartes Énergie Water et Énergie Fighting.",
		'es-es': "Esta carta solo puede unirse a Pokémon Golpe Fluido. Si esta carta está unida a cualquier otra carta que no sea un Pokémon Golpe Fluido, descarta esta carta.\n\nMientras esta carta esté unida a 1 Pokémon, proporciona\nun total de 2 Energías, Water y Fighting, en cualquier combinación.",
		'it-it': "Questa carta può essere assegnata solo a Pokémon Colpo Rapido. Scarta questa carta se è assegnata a un Pokémon che non è un Pokémon Colpo Rapido.\n\nFintanto che questa carta è assegnata a un Pokémon, fornisce due Energie Water e Fighting in qualsiasi combinazione.",
		'pt-br': "Esta carta só pode ser ligada a um Pokémon Golpe Fluido. Se esta carta estiver ligada a qualquer coisa além de um Pokémon Golpe Fluido, descarte esta carta.\n\nEnquanto esta carta estiver ligada a um Pokémon, ela fornecerá 2 Energias em qualquer combinação de Energia Water e Energia Fighting.",
		'de-de': "Diese Karte kann nur an ein Fließender-Angriff-Pokémon angelegt sein. Wenn diese Karte an etwas anderes als ein Fließender-Angriff-Pokémon angelegt ist, lege diese Karte auf deinen Ablagestapel.\n\nSolange diese Karte an ein Pokémon angelegt ist, liefert sie 2 Energien in beliebiger Kombination aus Water-Energie und Fighting-Energie."
	},

	energyType: "Special",


	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 546701,
				tcgplayer: 234107
			}
		},
	],
}

export default card
