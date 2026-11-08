import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Double Dragon Energy",
		'fr-fr': "Double Énergie Dragon",
		'es-es': "Doble Energía Dragón",
		'it-it': "Energia Drago doppia",
		'pt-br': "Energia Dragão Dupla",
		'de-de': "DoppelDrachenEnergie"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte ne peut être attachée qu'à un Pokémon Dragon. Cette carte fournit n'importe quel type d'Énergie, mais ne fournit que 2 Énergies à la fois, uniquement pendant qu'elle est attachée à un Pokémon Dragon.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Dragon, défaussez cette carte.)",
		'en-us': "This card can only be attached to Dragon Pokémon. This card provides every type of Energy, but provides only 2 Energy at a time, only while this card is attached to a Dragon Pokémon.\n\n(If this card is attached to anything other than a Dragon Pokémon, discard this card.)",
		'es-es': "Esta carta solo puede unirse a Pokémon Dragon. Esta carta proporciona todos los tipos de Energía, pero solo proporciona 2 Energías a la vez y solo mientras esta carta esté unida a un Pokémon Dragon.\n\n(Si esta carta está unida a cualquier otra carta que no sea un Pokémon Dragon, descarta esta carta).",
		'it-it': "Questa carta può essere assegnata solo a Pokémon Dragon e fornisce Energia di qualsiasi tipo, ma solo due alla volta e solo quando è assegnata a Pokémon Dragon.\n\nScarta questa carta se è assegnata a un Pokémon che non sia un Pokémon Dragon.",
		'pt-br': "Este card só pode ser ligado a Pokémon Dragon. Este card fornece qualquer tipo de Energia, mas apenas 2 Energias de cada vez, somente quando está ligado a um Pokémon Dragon.\n\n(Se este card estiver ligado a qualquer coisa diferente de um Pokémon Dragon, descarte-o.)",
		'de-de': "Diese Karte kann nur an Dragon-Pokémon angelegt werden. Diese Karte liefert Energie jeden Typs, aber immer nur jeweils 2 Energien, wenn sie an ein Dragon-Pokémon angelegt ist.\n\n(Lege diese Karte auf deinen Ablagestapel, wenn sie an eine andere Karte als ein Dragon-Pokémon angelegt ist.)"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 282765,
		tcgplayer: 98133
	}
}

export default card
