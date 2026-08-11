import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Escape Board",
		'fr-fr': "Skateboard Évasion",
		'es-es': "Escapatín",
		'it-it': "Skateboard di Fuga",
		'pt-br': "Skate de Fuga",
		'de-de': "Fluchtboard"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de Colorless et il peut battre en retraite même s’il est Endormi ou Paralysé.",
		'en-us': "The Retreat Cost of the Pokémon this card is attached to is Colorless less, and it can retreat even if it’s Asleep or Paralyzed.",
		'es-es': "El Coste de Retirada del Pokémon al que esté unida esta carta es de Colorless menos, y puede retirarse incluso si está Dormido o Paralizado.",
		'it-it': "Il costo di ritirata del Pokémon a cui è assegnata questa carta è ridotto di Colorless e il Pokémon può ritirarsi anche se è addormentato o paralizzato.",
		'pt-br': "O custo de Recuo do Pokémon ao qual esta carta está ligada é Colorless a menos e ele poderá recuar mesmo que esteja Adormecido ou Paralisado.",
		'de-de': "Die Rückzugskosten des Pokémon, an das diese Karte angelegt ist, verringern sich um Colorless und es kann sich zurückziehen, auch wenn es schläft oder paralysiert ist."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 316047,
		tcgplayer: 157783
	}
}

export default card
